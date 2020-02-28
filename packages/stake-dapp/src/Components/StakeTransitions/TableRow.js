import React from "react";

import Typography from "@material-ui/core/Typography";
import ArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import { useStyles } from "./styles";

const TableRow = ({ handleExpandeTable, expandTable }) => {
  const classes = useStyles();
  return (
    <div className={classes.tableRow} onClick={handleExpandeTable}>
      <div className={classes.tableData}>
        <Typography className={classes.title}>Jan 2020</Typography>
        <Typography className={classes.id}>ID-8783A4S670D</Typography>
      </div>
      <div className={classes.tableData}>
        <Typography className={classes.title}>Stake Amount</Typography>
        <Typography className={classes.value}>600</Typography>
        <Typography className={classes.unit}>AGI</Typography>
      </div>
      <div className={classes.tableData}>
        <Typography className={classes.title}>Reward Amount</Typography>
        <Typography className={classes.value}>150</Typography>
        <Typography className={classes.unit}>AGI</Typography>
      </div>
      <div className={classes.tableData}>
        <Typography className={classes.title}>Stakers</Typography>
        <Typography className={classes.value}>25</Typography>
        <Typography className={classes.unit}>people</Typography>
      </div>
      <div className={classes.tableData}>
        <Typography className={classes.title}>Pool Size</Typography>
        <Typography className={classes.value}>7,000</Typography>
        <Typography className={classes.unit}>AGI</Typography>
      </div>
      <div className={classes.tableData}>{expandTable ? <ArrowUpIcon /> : <ArrowDownIcon />}</div>
    </div>
  );
};

export default TableRow;
