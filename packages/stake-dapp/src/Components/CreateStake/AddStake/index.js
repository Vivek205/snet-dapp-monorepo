import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import web3 from "web3";
import BigNumber from "bignumber.js";

import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import SwapHorizontalCircleIcon from "@material-ui/icons/SwapHorizontalCircle";
import InputAdornment from "@material-ui/core/InputAdornment";

import SNETButton from "shared/dist/components/SNETButton";
import SNETTextfield from "shared/dist/components/SNETTextfield";
import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";

import { useStyles } from "./styles";
import { toWei, fromWei, isValidInputAmount } from "../../../Utils/GenHelperFunctions";
import { waitForTransaction, approveToken, submitStake } from "../../../Utils/BlockchainHelper";
import { LoaderContent } from "../../../Utils/Loader";
import { tokenActions, stakeActions, loaderActions } from "../../../Services/Redux/actionCreators";

const BN = web3.utils.BN;
const stateSelector = state => ({
  tokenBalance: state.tokenReducer.tokenBalance,
  tokenAllowance: state.tokenReducer.tokenAllowance,
  metamaskDetails: state.metamaskReducer.metamaskDetails,
});

const AddStake = ({ handleClose, open, addStakeAmountDetails, stakeDetails, autoRenewal }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [stakeAmount, setStakeAmount] = useState(0);
  const [rewardAmount, setRewardAmount] = useState(0);

  const [alert, setAlert] = useState({ type: alertTypes.ERROR, message: undefined });

  const { tokenBalance, tokenAllowance, metamaskDetails } = useSelector(state => stateSelector(state));

  const stakeStartDate = moment.unix(stakeDetails.startPeriod).format("MMM YYYY");

  // TODO - Check for the Current Time to allow the Operation or Not

  const handleCancel = () => {
    handleClose();
  };

  const handleSubmitFunds = async () => {
    const zeroBN = new BN(0);
    const stakeAmountBN = new BN(toWei(stakeAmount));
    const tokenBalanceBN = new BN(tokenBalance);
    const tokenAllowanceBN = new BN(tokenAllowance);

    //console.log("Auto Renewal Option - ", autoRenewal);

    if (stakeAmountBN.gt(zeroBN) && stakeAmountBN.lte(tokenBalanceBN)) {
      let txHash;
      let bAllowanceCalled = false;

      try {
        // Need to have an Token Approval before Deposit
        if (tokenAllowanceBN.lt(stakeAmountBN)) {
          txHash = await approveToken(metamaskDetails, stakeAmountBN);

          setAlert({ type: alertTypes.INFO, message: "Transaction is in Progress" });

          dispatch(loaderActions.startAppLoader(LoaderContent.SUBMIT_STAKE));

          bAllowanceCalled = true;
          await waitForTransaction(txHash);
        }

        // Initiate the SubmitStake Operation
        txHash = await submitStake(metamaskDetails, stakeAmountBN, autoRenewal);

        if (!bAllowanceCalled) {
          dispatch(loaderActions.startAppLoader(LoaderContent.SUBMIT_STAKE));
          setAlert({ type: alertTypes.INFO, message: "Transaction is in Progress" });
        }

        await waitForTransaction(txHash);

        setAlert({ type: alertTypes.SUCCESS, message: "Transaction has been completed successfully" });

        dispatch(loaderActions.stopAppLoader());

        // Update the AGI Token Balances
        dispatch(tokenActions.updateTokenBalance(metamaskDetails));
        dispatch(tokenActions.updateTokenAllowance(metamaskDetails));

        // To get the latest state from Blockchain
        dispatch(stakeActions.fetchUserStakeFromBlockchain(metamaskDetails, stakeDetails.stakeMapIndex));
      } catch (err) {
        setAlert({ type: alertTypes.ERROR, message: "Transaction has failed." });
        dispatch(loaderActions.stopAppLoader());
      }
    } else {
      // Display the alert message
      setAlert({
        type: alertTypes.ERROR,
        message: `Oops! No sufficient AGI Balance in your wallet.`,
      });
    }
  };

  const handleAmountChange = event => {
    if (isValidInputAmount(event.target.value)) {
      setStakeAmount(event.target.value);
      setRewardAmount(computeReward(event.target.value));
    } else if (event.target.value === "") {
      setStakeAmount("");
    } else {
      // Just Ignore the value
    }
  };

  const computeReward = _stakeAmount => {
    if (_stakeAmount === 0) return 0;

    const stakeAmount = new BigNumber(_stakeAmount);
    const windowRewardAmount = new BigNumber(stakeDetails.rewardAmount);
    const windowMaxCap = new BigNumber(stakeDetails.windowMaxCap);
    let totalStakedAmount = new BigNumber(stakeDetails.totalStakedAmount === 0 ? 1 : stakeDetails.totalStakedAmount);

    // Assuming that the new Stake will be part of total stake amount
    totalStakedAmount = totalStakedAmount.plus(stakeAmount);

    let _rewardAmount = new BigNumber(0);

    if (totalStakedAmount.lt(windowMaxCap)) {
      _rewardAmount = stakeAmount.times(windowRewardAmount).div(totalStakedAmount);
    } else {
      _rewardAmount = stakeAmount.times(windowRewardAmount).div(windowMaxCap);
    }

    return _rewardAmount;
  };

  return (
    <div>
      <Modal open={open} onClose={handleCancel} className={classes.Modal}>
        <Card className={classes.card}>
          <CardHeader
            className={classes.CardHeader}
            title="Add Stake Amount"
            action={
              <IconButton onClick={handleCancel}>
                <CloseIcon />
              </IconButton>
            }
          />
          <CardContent className={classes.CardContent}>
            <div className={classes.sessionDetails}>
              <Typography>Session : </Typography>
              <Typography>
                {stakeStartDate} #{stakeDetails.stakeMapIndex}
              </Typography>
            </div>
            <div className={classes.addStakeTextfieldSection}>
              <SNETTextfield
                name="stakeAmount"
                label="Input Stake Amount"
                extraInfo="Avaialble Balance:"
                value={stakeAmount}
                onChange={handleAmountChange}
                InputProps={{
                  endAdornment: <InputAdornment position="start">agi</InputAdornment>,
                }}
              />
              <SwapHorizontalCircleIcon />
              <SNETTextfield
                label="Reward Amount"
                readOnly={true}
                extraInfo="Approximate Estimate"
                value={fromWei(rewardAmount)}
                InputProps={{
                  endAdornment: <InputAdornment position="start">agi</InputAdornment>,
                }}
              />
            </div>
            <div className={classes.stakeAmtDetailsContainer}>
              {addStakeAmountDetails.map(item => (
                <div className={classes.stakeAmtDetail} key={item.title}>
                  <div className={classes.iconTitleContainer}>
                    <InfoIcon />
                    <Typography className={classes.title}>{item.title}</Typography>
                  </div>
                  <div className={classes.value}>
                    <Typography>{item.amount}</Typography>
                    <Typography>AGI</Typography>
                  </div>
                </div>
              ))}
            </div>
            <div className={classes.alertBoxContainer}>
              <AlertBox type={alertTypes.INFO}>
                <InfoIcon />
                <Typography className={classes.infoAlertMessage}>
                  You can withdraw amount of that keeps the minimum of {fromWei(stakeDetails.minStake)} AGI stake amount
                  or you can withdraw all stake amount for a balance of 0 AGI.
                </Typography>
              </AlertBox>
              <AlertBox type={alert.type} message={alert.message} />
            </div>
          </CardContent>
          <CardActions className={classes.CardActions}>
            <SNETButton
              children="cancel"
              color="primary"
              variant="text"
              onClick={handleCancel}
              disabled={!metamaskDetails.isTxnsAllowed}
            />
            <SNETButton
              children="submit funds"
              color="primary"
              variant="contained"
              onClick={handleSubmitFunds}
              disabled={!metamaskDetails.isTxnsAllowed}
            />
          </CardActions>
        </Card>
      </Modal>
    </div>
  );
};

export default AddStake;
