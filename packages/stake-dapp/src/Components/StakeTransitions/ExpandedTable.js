import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { useStyles } from "./styles";
import { fromWei } from "../../Utils/GenHelperFunctions";

const processState = {
  SubmitStake: "New Stake",
  ClaimStake: "Claim",
  ApproveStake: "Approve",
  RejectStake: "Reject",
  AutoRenewStake: "Auto Renewal",
  RenewStake: "Renew",
  WithdrawStake: "Withdraw",
};

const ExpandedTable = ({ showTable, stakeMapIndex, transactionList }) => {
  const classes = useStyles();

  const getStakeAmount = transaction => {
    let stakeAmount = 0;
    let rewardAmount = 0;
    const eventData = transaction.eventData;

    switch (transaction.eventName) {
      case "SubmitStake":
        stakeAmount = "+" + fromWei(eventData.stakeAmount);
        break;
      case "ClaimStake":
        stakeAmount = "-" + fromWei(eventData.totalAmount);
        break;
      case "ApproveStake":
        stakeAmount = "-" + fromWei(eventData.returnAmount);
        break;
      case "RejectStake":
        stakeAmount = "-" + fromWei(eventData.returnAmount);
        break;
      case "AutoRenewStake":
        stakeAmount = "-" + fromWei(eventData.returnAmount);
        break;
      case "RenewStake":
        // Getting Reward Amount
        rewardAmount = eventData.stakeAmount - eventData.stakeAmount;
        stakeAmount = "+" + fromWei(rewardAmount);
        break;
      case "WithdrawStake":
        stakeAmount = "-" + fromWei(eventData.stakeAmount);
        break;
      default:
        stakeAmount = "0";
        break;
    }
    return stakeAmount;
  };

  const getTransactionDetails = transaction => {
    let txnDetails = "";

    const eventData = transaction.eventData;

    switch (transaction.eventName) {
      case "SubmitStake":
        txnDetails = "New Stake";
        break;
      case "ClaimStake":
        txnDetails = "Reward Amount: " + fromWei(eventData.rewardAmount) + " AGI";
        break;
      case "ApproveStake":
        txnDetails = "Approved Stake: " + fromWei(eventData.approvedStakeAmount) + " AGI";
        break;
      case "RejectStake":
        txnDetails = "Transferred to Metamask: " + fromWei(eventData.returnAmount) + " AGI";
        break;
      case "AutoRenewStake":
        if (stakeMapIndex === eventData.oldStakeIndex)
          txnDetails = "Renewed to new Stake Id: " + eventData.newStakeIndex;
        else txnDetails = "Renewed from Stake Id: " + eventData.oldStakeIndex;

        txnDetails +=
          " Approved Stake: " + fromWei(eventData.approvedAmount) + "/" + fromWei(eventData.stakeAmount) + " AGI";
        break;
      case "RenewStake":
        if (stakeMapIndex === eventData.oldStakeIndex)
          txnDetails = "Renewed to new Stake Id: " + eventData.newStakeIndex;
        else txnDetails = "Renewed from Stake Id: " + eventData.oldStakeIndex;

        txnDetails +=
          " Stake Amount: " + fromWei(eventData.stakeAmount) + "/" + fromWei(eventData.totalAmount) + " AGI";
        break;
      case "WithdrawStake":
        txnDetails = "Transferred to Metamask: " + fromWei(eventData.stakeAmount) + " AGI";
        break;
      default:
        txnDetails = "";
        break;
    }
    return txnDetails;
  };

  if (showTable) {
    return (
      <Grid container className={classes.expandedTable}>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.expandedTableCol}>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Typography>Date</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography>Process State</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Typography>Status</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Typography>Transaction</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography>Detail</Typography>
          </Grid>
        </Grid>

        {transactionList.map(t => (
          <Grid key={t.txnHash} item xs={12} sm={12} md={12} lg={12} className={classes.expandedTableRow}>
            <Grid item xs={12} sm={12} md={2} lg={2} className={classes.dateDetails}>
              <Typography className={classes.mobileTitle}>Date: </Typography>
              <Typography>{t.txnDate}</Typography>
              {/* <Typography>{"time??"}</Typography> */}
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Typography className={classes.mobileTitle}>Process State:</Typography>
              <Typography>{`${processState[t.eventName]}`}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2}>
              <Typography className={classes.mobileTitle}>Status:</Typography>
              <Typography className={classes.statusValue}>Success</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2}>
              <Typography className={classes.mobileTitle}>Transaction:</Typography>
              <Typography>{getStakeAmount(t)} AGI</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Typography className={classes.mobileTitle}>Detail:</Typography>
              <Typography>{getTransactionDetails(t)}</Typography>
            </Grid>
          </Grid>
        ))}

        {/* <Grid item xs={12} sm={12} md={2} lg={2} className={classes.dateDetails}>
            <Typography className={classes.mobileTitle}>Date: </Typography>
            <Typography>10 Feb 2020</Typography>
            <Typography>02:32 AM EST</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography className={classes.mobileTitle}>Process State:</Typography>
            <Typography>Claims Withdraw</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Typography className={classes.mobileTitle}>Status:</Typography>
            <Typography className={classes.statusValue}>Success</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Typography className={classes.mobileTitle}>Transaction:</Typography>
            <Typography>-750 AGI</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography className={classes.mobileTitle}>Detail:</Typography>
            <Typography>Transfered to Metamask wallet</Typography>
          </Grid> */}
      </Grid>
    );
  }

  return null;
};

export default ExpandedTable;
