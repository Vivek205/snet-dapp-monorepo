import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InfoIcon from "@material-ui/icons/Info";
import isEmpty from "lodash/isEmpty";
import BigNumber from "bignumber.js";

import SNETButton from "shared/dist/components/SNETButton";
import { useStyles } from "./styles";
import { ControlServiceRequest } from "../../Utils/Daemon/ControlService";
import { checkIfKnownError } from "shared/dist/utils/error";
import { aiServiceListActions } from "../../Services/Redux/actionCreators";
import UnclaimedPayments from "./UnclaimedPayments";
import MPEContract from "../../Utils/PlatformContracts/MPEContract";
import { blockChainEvents } from "../../Utils/Blockchain";
import { blocksToDays, signatureHexToVRS } from "../../Utils/Grpc";
import { initSDK } from "shared/src/utils/snetSdk";
import { cogsToAgi } from "shared/dist/utils/Pricing";
import { itemsPerPageOptions } from "./content";

const controlServiceRequest = new ControlServiceRequest();
const defaultPaymentAggregate = {
  count: 0,
  amount: new BigNumber(0),
  expiry: { d7: { count: 0, amount: new BigNumber(0) } },
};

const defaultPagination = {
  limit: 0,
  offset: 0,
  totalCount: 0,
  itemsPerPage: itemsPerPageOptions[0].value,
};

class WalletAccount extends React.Component {
  state = {
    unclaimedPayments: [],
    pendingPayments: [],
    escrowBalance: "",
    aggregatePaymentDetails: defaultPaymentAggregate,
    pagination: defaultPagination,
  };

  async componentDidMount() {
    const { orgUuid, getServices } = this.props;
    this.initEscrow();
    const serviceList = await getServices(orgUuid);
    this.findServiceHost(serviceList);
  }

  async componentDidUpdate(prevProps) {
    const { orgUuid, getServices } = this.props;
    if (prevProps.orgUuid !== orgUuid) {
      const serviceList = await getServices(orgUuid);
      this.findServiceHost(serviceList);
    }
  }

  initEscrow = async () => {
    const sdk = await initSDK();
    const escrowBalance = await sdk.account.escrowBalance();
    this.setState({ escrowBalance: escrowBalance.toString() });
  };

  findServiceHost = serviceList => {
    const endpoints = serviceList
      .map(el => {
        if (isEmpty(el.groups)) {
          return undefined;
        }
        return el.groups[0].endpoints;
      })
      .filter(el => Boolean(el));

    const validEndpoints = endpoints.map(endpoint => {
      return Object.entries(endpoint)
        .map(([key, value]) => {
          if (value.valid) {
            return key;
          }
          return undefined;
        })
        .filter(el => Boolean(el));
    });

    // TODO select endpoint that is valid
    const serviceHost = validEndpoints[0];
    controlServiceRequest.serviceHost = serviceHost;
  };

  getUnclaimedPaymentsFromDaemon = async () => {
    const unclaimedPayments = await controlServiceRequest.getListUnclaimed();
    return unclaimedPayments;
  };

  getPendingPaymentsFromDaemon = async () => {
    const pendingPayments = await controlServiceRequest.getListInProgress();
    return pendingPayments;
  };

  claimMpeChannel = async (channelId, signedAmount, signatureHex) => {
    const { v, r, s } = signatureHexToVRS(signatureHex);
    const mpe = new MPEContract();
    const method = await mpe.channelClaim(channelId, signedAmount, signedAmount, v, r, s, false);

    method.on(blockChainEvents.TRANSACTION_HASH, () => {
      // TODO call daemon start claims
    });
    method.once(blockChainEvents.CONFIRMATION, async () => {
      // TODO stop loader
      // TODO refetch claims list
      await this.getUnclaimedPaymentsFromDaemon();
      await method.off();
    });
    method.on(blockChainEvents.ERROR, () => {
      //  TODO handle error
    });
  };

  claimChannelInBlockchain = async (channelId, channelNonce, signedAmount, signature) => {
    try {
      const getClaimSignatureFromDaemon = async () => {
        const payment = await controlServiceRequest.startClaim(channelId, channelNonce);
        return payment.signature;
      };

      const signatureForBlockchain = signature ? signature : await getClaimSignatureFromDaemon();
      this.claimMpeChannel(channelId, signedAmount, signatureForBlockchain);
    } catch (e) {
      // TODO handle error
    }
  };

  calculatePaymentAggregate = payments => {
    return payments.reduce((acc, cur) => {
      const updatedValue = {
        ...acc,
        count: acc.count + 1,
        amount: BigNumber.sum(acc.amount, cur.signedAmount).toFixed(),
      };
      const blocksRemaining = cur.channelExpiry - cur.currentBlock;
      if (blocksRemaining > 0 && blocksToDays(blocksRemaining) <= 7) {
        updatedValue.expiry = {
          ...acc.expiry,
          d7: {
            count: acc.expiry.d7.count + 1,
            amount: BigNumber.sum(acc.expiry.d7.amount, cur.signedAmount),
          },
        };
      }
      return updatedValue;
    }, defaultPaymentAggregate);
  };

  handleClickUnclaimed = async () => {
    try {
      const [unclaimedPayments, pendingPayments] = await Promise.all([
        this.getUnclaimedPaymentsFromDaemon(),
        this.getPendingPaymentsFromDaemon(),
      ]);
      const aggregatePaymentDetails = this.calculatePaymentAggregate([...unclaimedPayments, ...pendingPayments]);
      const totalCount = unclaimedPayments.length + pendingPayments.length;
      this.setState({
        unclaimedPayments,
        pendingPayments,
        aggregatePaymentDetails,
        pagination: { ...defaultPagination, totalCount, limit: totalCount < 10 ? totalCount : 10 },
      });
    } catch (e) {
      if (checkIfKnownError(e)) {
        // TODO set alert error
      }
      return undefined;
    }
  };

  onItemsPerPageChange = itemsPerPage => {
    this.setState(prevState => ({
      pagination: { ...prevState.pagination, itemsPerPage },
    }));
  };

  handlePageChange = offset => {
    this.setState(prevState => ({
      pagination: { ...prevState.pagination, offset },
    }));
  };

  render() {
    const { classes } = this.props;
    const { unclaimedPayments, pendingPayments, escrowBalance, aggregatePaymentDetails, pagination } = this.state;
    const paymentsList = [...unclaimedPayments, ...pendingPayments];
    return (
      <Grid container className={classes.walletAccContainer}>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.topSection}>
          <Typography variant="h3">Wallet Account</Typography>
          <Typography variant="h5">
            Manage your token claims. Tokens can be claimed together or individually from each channel.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.box}>
          <div className={classes.pendingTokenSection}>
            <div className={classes.pendingTokenDetails}>
              <div>
                <InfoIcon />
                <Typography>Pending tokens</Typography>
              </div>
              <Typography className={classes.pendingValue}>
                {`${aggregatePaymentDetails.amount}`} <span>agi</span>
              </Typography>
            </div>
            <SNETButton children="claims token" color="primary" variant="contained" />
            <Typography className={classes.tokenClaimDesc}>
              Lorem ipsum dolor sit amet, eu sit viris iracundia, graece molestiae sea ut. Quo in quas utamur
              conclusionemque, id vel solum quidam animal, mel nibh facete accusata ea.
            </Typography>
          </div>
          <div className={classes.expiringDetailsSection}>
            <div>
              <Typography>Claims expiring in 7 days</Typography>
              <Typography>{aggregatePaymentDetails.expiry.d7.count}</Typography>
            </div>
            <div>
              <Typography>Value of claims expiring in 7 days</Typography>
              <Typography>
                {`${aggregatePaymentDetails.expiry.d7.amount}`} <span>agi</span>
              </Typography>
            </div>
            <div>
              <Typography>Escrow balance</Typography>
              <Typography>
                {cogsToAgi(escrowBalance)} <span>agi</span>
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.box}>
          <div className={classes.header}>
            <Typography variant="h6">Claims</Typography>
          </div>
          <Typography className={classes.claimsDesc}>
            To collect pending tokens from individual channels, select the channels and use the claim button. Claims
            that are going to be expired soon are marked with “!” icon. Please note that you cannot select more than
            five claims at a time.
          </Typography>
          <div className={classes.claimSelectedSection}>
            <SNETButton
              children="click here for unclaimed list"
              color="primary"
              variant="outlined"
              onClick={this.handleClickUnclaimed}
            />
            <Typography>Selected (0)</Typography>
          </div>
          <div>
            <UnclaimedPayments
              payments={paymentsList}
              handleClaimChannel={this.claimChannelInBlockchain}
              pagination={pagination}
              onItemsPerPageChange={this.onItemsPerPageChange}
              handlePageChange={this.handlePageChange}
            />
          </div>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  orgUuid: state.organization.uuid,
  limit: state.aiServiceList.pagination.limit,
  offset: state.aiServiceList.pagination.offset,
  totalCount: state.aiServiceList.totalCount,
  serviceList: state.aiServiceList.data,
});

const mapDispatchToProps = dispatch => ({
  getServices: orgUuid => dispatch(aiServiceListActions.getAiServiceList(orgUuid)),
});
export default withStyles(useStyles)(connect(mapStateToProps, mapDispatchToProps)(WalletAccount));
