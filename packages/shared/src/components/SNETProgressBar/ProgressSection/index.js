import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { useStyles } from "./styles";
import StatusToggler from "./StatusToggler";

export const ProgressStatusList = {
  NOT_COMPLETED: "",
  FAILED: "FAILED",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
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
  progressStatus: PropTypes.oneOf(["", "FAILED", "PENDING", "SUCCESS"]),
  onSectionClick: PropTypes.func,
};

export default ProgressSection;
