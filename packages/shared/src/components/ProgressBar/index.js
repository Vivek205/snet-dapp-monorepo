import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

import ProgressSection, { ProgressStatusList } from "./ProgressSection";
import { useStyles } from "./styles";

const ProgressBar = ({ classes, activeSection, progressText, onSectionClick, uploadStatus }) => {
  const computeProgressStatus = (progressNumber, activeSection) => {
    if (progressNumber < Number(activeSection)) {
      return ProgressStatusList.COMPLETED;
    }
    if (progressNumber === Number(activeSection)) {
      return ProgressStatusList.ACTIVE;
    }
    if (progressNumber > Number(activeSection)) {
      return ProgressStatusList.IDLE;
    }
  };

  const handleProgressBarStatus = (progressNumber, activeSection) => {
    if (uploadStatus[progressNumber]) {
      return uploadStatus[progressNumber];
    }
    return computeProgressStatus(progressNumber, activeSection);
  };

  return (
    <div className={classes.tabsContainer}>
      <ul>
        {progressText.map((text, index) => (
          <ProgressSection
            progressNumber={index + 1}
            progressText={text}
            progressStatus={handleProgressBarStatus(index + 1, activeSection)}
            key={text}
            onSectionClick={onSectionClick}
          />
        ))}
      </ul>
    </div>
  );
};

ProgressBar.propTypes = {
  activeSection: PropTypes.number,
  progressText: PropTypes.arrayOf(PropTypes.string),
  onSectionClick: PropTypes.func,
};

ProgressBar.defaultProps = {
  uploadStatus: {},
};

export default withStyles(useStyles)(ProgressBar);
