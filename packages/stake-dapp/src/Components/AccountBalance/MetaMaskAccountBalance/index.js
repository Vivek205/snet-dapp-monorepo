import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import InfoIcon from "@material-ui/icons/Info";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import SNETButton from "shared/dist/components/SNETButton";

import { useStyles } from "./styles";
import { tokenActions, stakeActions, loaderActions } from "../../../Services/Redux/actionCreators";
import { NetworkNames } from "../../../Utils/constants/NetworkNames";

import { LoaderContent } from "../../../Utils/Loader";
import { fromWei } from "../../../Utils/GenHelperFunctions";
import { approveTokenV2 } from "../../../Utils/BlockchainHelper";

class MetaMaskAccountBalance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
      switchState: false,
    };
  }

  componentDidMount = async () => {
    const {
      updateTokenBalance,
      updateTokenAllowance,
      fetchUserStakeBalanceFromBlockchain,
      metamaskDetails,
    } = this.props;

    await updateTokenBalance(metamaskDetails);
    await updateTokenAllowance(metamaskDetails);
    await fetchUserStakeBalanceFromBlockchain(metamaskDetails);
  };

  handleApproveStake = async () => {
    const { startLoader, stopLoader, updateTokenAllowance, metamaskDetails } = this.props;

    const defaultAuthorizedAmount = "11000000000"; // 100 AGI - need to update the same to 10M

    try {
      startLoader(LoaderContent.SUBMIT_STAKE);

      await approveTokenV2(metamaskDetails, defaultAuthorizedAmount);

      await updateTokenAllowance(metamaskDetails);

      stopLoader();
      //console.log("Approve Token completed successfully...");
    } catch (_error) {
      //console.log("Error during Approval - ", _error);
      stopLoader();
    }
  };

  handleSwitchChange = _event => {
    this.setState({ switchState: !this.state.switchState });
  };

  render() {
    const { classes, metamaskDetails, tokenBalance, tokenAllowance, stakeBalance } = this.props;

    const networkNames = NetworkNames.filter(nw => nw.networkId.toString() === metamaskDetails.networkId.toString());

    return (
      <div className={classes.metamaskAccBalanceContainer}>
        <div className={classes.accountDetails}>
          <div>
            <div className={classes.label}>
              <div className={classes.iconTooltipContainer}>
                <InfoIcon />
                <p>Your account is linked to a third-party crypto wallet such as Metamask</p>
              </div>
              <span>Wallet</span>
            </div>
            <span>Metamask</span>
          </div>

          <div>
            <div className={classes.label}>
              <div className={classes.iconTooltipContainer}>
                <InfoIcon />
                <p>
                  Metamask allows you to select your Ethereum network. Please be sure you are using the correct network
                  for proper access to your wallet.
                </p>
              </div>
              <span>Current Network</span>
            </div>
            <span>
              {metamaskDetails.networkId} - {networkNames.length > 0 ? networkNames[0].networkName : ""}
            </span>
          </div>

          <div className={classes.walletIdContainer}>
            <div className={classes.label}>
              <span>Wallet ID</span>
            </div>
            <span className={classes.walletId}>{metamaskDetails.account}</span>
          </div>

          <div className={classes.switchToggleContainer}>
            <div className={classes.label}>
              <div className={classes.iconTooltipContainer}>
                <InfoIcon />
                <p>
                  Are the tokens user authorizes escrow to transfer from user wallet to escrow based on user
                  deposit/transfer action.
                </p>
              </div>
              {/* <span>Authorized Tokens</span> */}
            </div>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.switchState}
                  onChange={this.handleSwitchChange}
                  color="primary"
                  name="authorizeTokens"
                />
              }
              label="Auto autorize staking escrow contract"
            />
          </div>

          <div className={classes.bgBox}>
            <div className={classes.label}>
              <div className={classes.iconTooltipContainer}>
                <InfoIcon />
                <p>
                  Are the tokens user authorizes escrow to transfer from user wallet to escrow based on user
                  deposit/transfer action. User cannot transfer more than the authorized amount.
                </p>
              </div>
              <span>Authorized Tokens</span>
            </div>
            <span>{fromWei(tokenAllowance)} AGI</span>
          </div>

          <div className={classes.bgBox}>
            <div className={classes.label}>
              <div className={classes.iconTooltipContainer}>
                <InfoIcon />
                <p>Account balance displaying the total number of AGI tokens currently available with the wallet.</p>
              </div>
              <span>Total Tokens</span>
            </div>
            <span>{fromWei(tokenBalance)} AGI</span>
          </div>

          <div className={classes.bgBox}>
            <div className={classes.label}>
              <div className={classes.iconTooltipContainer}>
                <InfoIcon />
                <p>
                  The total amount of AGI tokens that you have involved across all stake sessions. This includes pending
                  and active staking amounts.
                </p>
              </div>
              <span>Total Staked</span>
            </div>
            <span>{fromWei(stakeBalance)} AGI</span>
          </div>
          <SNETButton children="tbd-approve" color="primary" variant="contained" onClick={this.handleApproveStake} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  metamaskDetails: state.metamaskReducer.metamaskDetails,
  tokenBalance: state.tokenReducer.tokenBalance,
  tokenAllowance: state.tokenReducer.tokenAllowance,
  stakeBalance: state.stakeReducer.stakeBalance,
});

const mapDispatchToProps = dispatch => ({
  updateTokenBalance: metamaskDetails => dispatch(tokenActions.updateTokenBalance(metamaskDetails)),
  updateTokenAllowance: metamaskDetails => dispatch(tokenActions.updateTokenAllowance(metamaskDetails)),
  fetchUserStakeBalanceFromBlockchain: metamaskDetails =>
    dispatch(stakeActions.fetchUserStakeBalanceFromBlockchain(metamaskDetails)),
  startLoader: loaderContent => dispatch(loaderActions.startAppLoader(loaderContent)),
  stopLoader: () => dispatch(loaderActions.stopAppLoader()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(MetaMaskAccountBalance));
