import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { useStyles } from "./styles";
import StatusToggler from "./StatusToggler";

export const ProgressStatusList = {
  IDLE: "idle",
  ACTIVE: "active",
  COMPLETED: "completed",
  FAILED: "failed",
  SUCCEEDED: "succeeded",
  PENDING: "pending",
};

const ProgressSection = ({ progressNumber, progressText, progressStatus, onSectionClick }) => {
  const classes = useStyles();

  const handleSectionClick = () => {
    if (!onSectionClick) {
      return;
    }
    onSectionClick(progressNumber, progressText, progressStatus);
  };

  return (
    <li
      className={`${classes[progressStatus]} ${onSectionClick ? classes.clickableSection : ""}`}
      onClick={handleSectionClick}
    >
      <Fragment>
        <StatusToggler progressStatus={progressStatus} progressNumber={progressNumber} />
        <span className={classes.TabTitle}>{progressText}</span>
      </Fragment>
    </li>
  );
};

ProgressSection.propTypes = {
  progressNumber: PropTypes.number.isRequired,
  progressText: PropTypes.string.isRequired,
  progressStatus: PropTypes.oneOf(["idle", "active", "completed"]),
  onSectionClick: PropTypes.func,
};

export default ProgressSection;
