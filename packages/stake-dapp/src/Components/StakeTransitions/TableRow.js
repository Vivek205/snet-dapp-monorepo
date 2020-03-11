import React from "react";
import moment from "moment";
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

    // Check if the approved Amount exists
    const approvedStakeEvent = stakeWindow.transactionList.filter(t => t.eventName === "ApproveStake");
    const submitStakeEvent = stakeWindow.transactionList.filter(t => t.eventName === "SubmitStake");
    if (approvedStakeEvent.length > 0) {
      const transaction = approvedStakeEvent[0];
      const eventData = JSON.parse(
        transaction.eventData.json_str
          .replace(/'/gi, '"')
          .replace(/True/gi, "true")
          .replace(/False/gi, "false")
      );
      stakeAmount = eventData.approvedStakeAmount;
    } else if (submitStakeEvent.length > 0) {
      const transaction = submitStakeEvent[0];
      const eventData = JSON.parse(
        transaction.eventData.json_str
          .replace(/'/gi, '"')
          .replace(/True/gi, "true")
          .replace(/False/gi, "false")
      );
      stakeAmount = eventData.stakeAmount;
    }
    return stakeAmount;
  };

  const calculateReward = () => {
    let rewardAmount = 0;

    let stakeAmount = 0;

    // Check if the approved Amount exists
    const approvedStakeEvent = stakeWindow.transactionList.filter(t => t.eventName === "ApproveStake");
    const submitStakeEvent = stakeWindow.transactionList.filter(t => t.eventName === "SubmitStake");
    if (approvedStakeEvent.length > 0) {
      const transaction = approvedStakeEvent[0];
      const eventData = JSON.parse(
        transaction.eventData.json_str
          .replace(/'/gi, '"')
          .replace(/True/gi, "true")
          .replace(/False/gi, "false")
      );
      stakeAmount = eventData.approvedStakeAmount;

      rewardAmount = Math.floor(
        (stakeAmount * stakeWindow.rewardAmount) / Math.min(stakeWindow.windowTotalStake, stakeWindow.windowMaxCap)
      );
    } else if (submitStakeEvent.length > 0) {
      // Check if the stake crossed Approval Period - No Reward
      const currentTime = moment().unix();
      if (currentTime > stakeWindow.approvalEndPeriod) return 0;

      const transaction = submitStakeEvent[0];
      const eventData = JSON.parse(
        transaction.eventData.json_str
          .replace(/'/gi, '"')
          .replace(/True/gi, "true")
          .replace(/False/gi, "false")
      );
      stakeAmount = eventData.stakeAmount;

      rewardAmount = Math.floor((stakeAmount * stakeWindow.rewardAmount) / stakeWindow.windowMaxCap);
    }

    return rewardAmount;
  };

  return (
    <div className={classes.tableRow} onClick={_e => handleExpandeTable(stakeWindow.stakeMapIndex)}>
      <div className={classes.tableData}>
        <Typography className={classes.title}>{startPeriod}</Typography>
        <Typography className={classes.id}>ID-{stakeWindow.stakeMapIndex}</Typography>
      </div>
      <div className={classes.tableData}>
        <Typography className={classes.title}>Stake Amount</Typography>
        <Typography className={classes.value}>{fromWei(getStakeAmount())}</Typography>
        <Typography className={classes.unit}>AGI</Typography>
      </div>
      <div className={classes.tableData}>
        <Typography className={classes.title}>Reward Amount</Typography>
        <Typography className={classes.value}>{fromWei(calculateReward())}</Typography>
        <Typography className={classes.unit}>AGI</Typography>
      </div>
      <div className={classes.tableData}>
        <Typography className={classes.title}>Reward Pool</Typography>
        <Typography className={classes.value}>{fromWei(stakeWindow.rewardAmount)}</Typography>
        <Typography className={classes.unit}>AGI</Typography>
      </div>
      <div className={classes.tableData}>
        <Typography className={classes.title}>Pool Size</Typography>
        <Typography className={classes.value}>{fromWei(stakeWindow.windowTotalStake)}</Typography>
        <Typography className={classes.unit}>AGI</Typography>
      </div>
      <div className={classes.tableData}>{expandTable ? <ArrowUpIcon /> : <ArrowDownIcon />}</div>
    </div>
  );
};

export default TableRow;
