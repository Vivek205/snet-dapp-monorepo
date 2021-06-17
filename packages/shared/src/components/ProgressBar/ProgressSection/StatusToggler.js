import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";

import { useStyles } from "./styles";
import { ProgressStatusList } from "./";

const StatusToggler = ({ progressNumber, progressStatus }) => {
  const classes = useStyles();

  if (progressStatus === ProgressStatusList.COMPLETED) {
    return (
      <div className={classes.numberContaienr}>
        <span className={classes.completedIcon}>
          <CheckIcon />
        </span>
      </div>
    );
  }

  if (progressStatus === ProgressStatusList.FAILED) {
    return (
      <div className={classes.numberContaienr}>
        <span className={classes.errorIcon}>
          <ErrorOutlineIcon />
        </span>
      </div>
    );
  }

  if (progressStatus === ProgressStatusList.IN_PROGRESS) {
    return (
      <div className={classes.numberContaienr}>
        <span className={classes.waitingIcon}>
          <HourglassEmptyIcon />
        </span>
      </div>
    );
  }

  if (progressStatus === ProgressStatusList.STOPPED) {
    return (
      <div className={classes.numberContaienr}>
        <span className={classes.errorIcon}>
          <ErrorOutlineIcon />
        </span>
      </div>
    );
  }

  return (
    <div className={classes.numberContaienr}>
      <span className={classes.number}>{progressNumber}</span>
    </div>
  );
};

export default StatusToggler;
