import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InfoIcon from "@material-ui/icons/Info";
import isEmpty from "lodash/isEmpty";

import SNETButton from "shared/dist/components/SNETButton";
import { useStyles } from "./styles";
import { ControlServiceRequest } from "../../Utils/Daemon/ControlService";
import { checkIfKnownError } from "shared/dist/utils/error";
import { aiServiceListActions } from "../../Services/Redux/actionCreators";
import UnclaimedPayments from "./UnclaimedPayments";
import MPEContract from "../../Utils/PlatformContracts/MPEContract";
import { blockChainEvents } from "../../Utils/Blockchain";
import { signatureHexToVRS } from "../../Utils/Grpc";
import { initSDK } from "shared/src/utils/snetSdk";
import { cogsToAgi } from "shared/dist/utils/Pricing";

const controlServiceRequest = new ControlServiceRequest();

class WalletAccount extends React.Component {
  state = {
    unclaimedPayments: [],
    pendingPayments: [],
    escrowBalance: "",
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
    // TODO select endpoint that is valid
    const serviceHost = endpoints[0];
    controlServiceRequest.serviceHost = serviceHost;
    // this.setState({ serviceHost });
  };

  getUnclaimedPaymentsFromDaemon = async () => {
    // const { serviceHost } = this.state;
    // controlServiceRequest.serviceHost = serviceHost;
    const unclaimedPayments = await controlServiceRequest.getListUnclaimed();
    this.setState({ unclaimedPayments });
  };

  getPendingPaymentsFromDaemon = async () => {
    const pendingPayments = await controlServiceRequest.getListInProgress();
    this.setState({ pendingPayments });
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

  claimChannelInBlockchain = async (channelId, channelNonce, signedAmount) => {
    try {
      const payment = await controlServiceRequest.startClaim(channelId, channelNonce);
      this.claimMpeChannel(channelId, signedAmount, payment.signature);
    } catch (e) {
      // TODO handle error
    }
  };

  reclaimChannelInBlockchain = (channelId, channelNonce, signedAmount, signature) => {
    try {
      this.claimMpeChannel(channelId, channelNonce, signedAmount, signature);
    } catch (e) {
      // TODO handle error
    }
  };

  handleClickUnclaimed = async () => {
    try {
      await this.getUnclaimedPaymentsFromDaemon();
    } catch (e) {
      if (checkIfKnownError(e)) {
        // TODO set alert error
      }
      return undefined;
    }
  };

  handleClickPending = async () => {
    try {
      await this.getPendingPaymentsFromDaemon();
    } catch (e) {
      if (checkIfKnownError(e)) {
        // TODO set alert error
      }
      return undefined;
    }
  };

  onItemsPerPageChange = () => {
    return null;
  };

  handlePageChange = () => {
    return null;
  };

  render() {
    const { classes } = this.props;
    const { unclaimedPayments, pendingPayments, escrowBalance } = this.state;

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
                --- <span>agi</span>
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
              <Typography>---</Typography>
            </div>
            <div>
              <Typography>Value of claims expiring in 7 days</Typography>
              <Typography>
                --- <span>agi</span>
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
            <UnclaimedPayments payments={unclaimedPayments} handleClaimChannel={this.claimChannelInBlockchain} />
          </div>
          <div className={classes.claimSelectedSection}>
            <SNETButton
              children="click here for pending list"
              color="primary"
              variant="outlined"
              onClick={this.handleClickPending}
            />
            <Typography>Selected (0)</Typography>
          </div>
          <div>
            <UnclaimedPayments payments={pendingPayments} handleClaimChannel={this.reclaimChannelInBlockchain} />
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
