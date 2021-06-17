import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

import ProgressSection from "./ProgressSection";
import { useStyles } from "./styles";

const ProgressBar = ({ classes, progress, onSectionClick }) => {
  return (
    <div className={classes.tabsContainer}>
      <ul>
        {progress.map(({ progressText, status }, index) => (
          <ProgressSection
            progressNumber={index + 1}
            progressText={progressText}
            progressStatus={status}
            key={index}
            onSectionClick={onSectionClick}
          />
        ))}
      </ul>
    </div>
  );
};

ProgressBar.propTypes = {
  activeSection: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  progressText: PropTypes.arrayOf(PropTypes.string),
  onSectionClick: PropTypes.func,
};

export default withStyles(useStyles)(ProgressBar);
