import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import { useStyles } from "./styles";
import { ProgressStatusList } from "./";

const StatusToggler = ({ progressNumber, progressStatus }) => {
  const classes = useStyles();

  if (progressStatus === ProgressStatusList.COMPLETED) {
    return (
      <span className={classes.completedIcon}>
        <CheckCircleIcon />
      </span>
    );
  }
  return <span className={classes.number}>{progressNumber}</span>;
};

export default StatusToggler;
