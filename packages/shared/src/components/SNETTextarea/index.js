import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import InfoIcon from "@material-ui/icons/Info";

import { useStyles } from "./styles";
import StyledTextField from "shared/dist/components/StyledTextField";

const SNETTextarea = ({ classes, label, rowCount, colCount, content, minCount, maxCount }) => {
  return (
    <div className={classes.textareaIconContainer}>
      <div className={classes.infoIconContainer}>
        <InfoIcon />
      </div>
      <div className={classes.textareaContainer}>
        <span className={classes.label}>{label}</span>
        <textarea rows={rowCount} cols={colCount}>{content}</textarea>
        <span className={classes.charLength}>{minCount}/{maxCount} char</span>
      </div>
    </div>
  );
};

export default withStyles(useStyles)(SNETTextarea);
