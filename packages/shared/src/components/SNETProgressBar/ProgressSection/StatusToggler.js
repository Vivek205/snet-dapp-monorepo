import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import WaitIcon from "@material-ui/icons/HourglassEmpty";
import ExclamationIcon from "@material-ui/icons/PriorityHigh";

import { useStyles } from "./styles";
import { ProgressStatusList } from "./";

const StatusToggler = ({ progressNumber, progressStatus }) => {
  const classes = useStyles();

  if (progressStatus === ProgressStatusList.SUCCESS) {
    return (
      <div className={classes.numberContainer}>
        <span className={classes.completedIcon}>
          <CheckIcon />
        </span>
      </div>
    );
  } else if (progressStatus === ProgressStatusList.PENDING) {
    return (
      <div className={classes.numberContainer}>
        <span className={classes.pendingIcon}>
          <WaitIcon />
        </span>
      </div>
    );
  } else if (progressStatus === ProgressStatusList.FAILED) {
    return (
      <div className={classes.numberContainer}>
        <span className={classes.errorIcon}>
          <ExclamationIcon />
        </span>
      </div>
    );
  } else {
    return (
      <div className={classes.number}>
        <span>{progressNumber}</span>
      </div>
    );
  }
};

export default StatusToggler;
