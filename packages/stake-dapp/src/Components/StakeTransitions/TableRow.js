import React from "react";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import { useStyles } from "./styles";
import { fromWei } from "../../Utils/GenHelperFunctions";

const TableRow = ({ handleExpandeTable, expandTable, stakeWindow }) => {
  const classes = useStyles();

  const startPeriod = moment.unix(stakeWindow.startPeriod).format("MMM YYYY");

  const getStakeAmount = () => {
    let stakeAmount = 0;
    let autoRenewApprovedAmount = 0;

    // Check if the approved Amount exists
    const autoRenewStakeEvent = stakeWindow.transactionList.filter(
      t => t.eventName === "AutoRenewStake" && t.eventData.newStakeIndex === stakeWindow.stakeMapIndex
    );
    const approvedStakeEvent = stakeWindow.transactionList.filter(t => t.eventName === "ApproveStake");
    const submitStakeEvent = stakeWindow.transactionList.filter(t => t.eventName === "SubmitStake");

    // Check for Auto Renewal Event
    if (autoRenewStakeEvent.length > 0) {
      const transaction = autoRenewStakeEvent[0];
      autoRenewApprovedAmount = transaction.eventData.approvedAmount;
    }

    if (approvedStakeEvent.length > 0) {
      const transaction = approvedStakeEvent[0];
      stakeAmount = transaction.eventData.approvedStakeAmount;
    } else if (submitStakeEvent.length > 0) {
      stakeAmount = submitStakeEvent.map(s => parseInt(s.eventData.stakeAmount)).reduce((a, b) => a + b, 0);
    }

    return parseInt(stakeAmount) + parseInt(autoRenewApprovedAmount);
  };

  const calculateReward = () => {
    let rewardAmount = 0;
    let rewardAmountFromAutoRenewal = 0;
    let stakeAmount = 0;
    let autoRenewApprovedAmount = 0;

    // Check if Claim Event exists to get the Reward Amount
    const claimStakeEvent = stakeWindow.transactionList.filter(t => t.eventName === "ClaimStake");
    if (claimStakeEvent.length > 0) {
      return claimStakeEvent[0].eventData.rewardAmount;
    }

    // Check if the approved Amount exists
    const autoRenewStakeEvent = stakeWindow.transactionList.filter(
      t => t.eventName === "AutoRenewStake" && t.eventData.newStakeIndex === stakeWindow.stakeMapIndex
    );
    const approvedStakeEvent = stakeWindow.transactionList.filter(t => t.eventName === "ApproveStake");
    const submitStakeEvent = stakeWindow.transactionList.filter(t => t.eventName === "SubmitStake");

    // Check for Auto Renewal Event
    if (autoRenewStakeEvent.length > 0) {
      const transaction = autoRenewStakeEvent[0];
      autoRenewApprovedAmount = transaction.eventData.approvedAmount;

      rewardAmountFromAutoRenewal = Math.floor(
        (autoRenewApprovedAmount * stakeWindow.rewardAmount) /
          Math.min(stakeWindow.windowTotalStake, stakeWindow.windowMaxCap)
      );
    }

    // Check for Either Approved Stake or Submit Stake. If Approve Exists we can ignore Submit
    if (approvedStakeEvent.length > 0) {
      const transaction = approvedStakeEvent[0];
      stakeAmount = parseInt(transaction.eventData.approvedStakeAmount);

      rewardAmount = Math.floor(
        (stakeAmount * stakeWindow.rewardAmount) / Math.min(stakeWindow.windowTotalStake, stakeWindow.windowMaxCap)
      );
    } else if (submitStakeEvent.length > 0) {
      // Check if the stake crossed Approval Period - No Reward
      const currentTime = moment().unix();
      if (currentTime > stakeWindow.approvalEndPeriod)
        stakeAmount = submitStakeEvent.map(s => parseInt(s.eventData.stakeAmount)).reduce((a, b) => a + b, 0);
      rewardAmount = Math.floor((stakeAmount * stakeWindow.rewardAmount) / stakeWindow.windowMaxCap);
    }

    return parseInt(rewardAmount) + parseInt(rewardAmountFromAutoRenewal);
  };

  return (
    <Grid containerer className={classes.tableRow} onClick={_e => handleExpandeTable(stakeWindow.stakeMapIndex)}>
      <Grid item xs={12} sm={12} md={2} lg={2} className={classes.tableData}>
        <Typography className={classes.dateId}>{startPeriod}</Typography>
        <Typography className={classes.dateId}>ID-{stakeWindow.stakeMapIndex}</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={2} lg={2} className={classes.tableData}>
        <Typography className={classes.value}>{fromWei(getStakeAmount())}</Typography>
        <Typography className={classes.unit}>AGI</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={3} className={classes.tableData}>
        <Typography className={classes.value}>{fromWei(calculateReward())}</Typography>
        <Typography className={classes.unit}>AGI</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={2} lg={2} className={classes.tableData}>
        <Typography className={classes.value}>{fromWei(stakeWindow.rewardAmount)}</Typography>
        <Typography className={classes.unit}>AGI</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={2} lg={2} className={classes.tableData}>
        <Typography className={classes.value}>{fromWei(stakeWindow.windowTotalStake)}</Typography>
        <Typography className={classes.unit}>AGI</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={1} lg={1} className={classes.tableData}>
        {expandTable ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </Grid>
    </Grid>
  );
};

export default TableRow;
