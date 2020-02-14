import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";

import { useStyles } from "./styles";
import AlertLink from "./AlertLink";
import AlertIcon from "./AlertIcon";
import AlertHeader from "./AlertHeader";

export const alertTypes = {
  ERROR: "error",
  SUCCESS: "success",
  WARNING: "warning",
  INFO: "info",
};

const backgroundColor = {
  error: alertTypes.ERROR,
  success: alertTypes.SUCCESS,
  warning: alertTypes.WARNING,
  info: alertTypes.INFO,
};

const AlertBox = ({ classes, message, type, link, icon, header }) => {
  if (!message) {
    return null;
  }

  return (
    <div className={clsx(classes.alertBoxContainer, classes[backgroundColor[type]])}>
      <AlertIcon icon={icon} />
      <div className={classes.content}>
        <AlertHeader header={header} />
        <p>
          {message} <AlertLink link={link} />
        </p>
      </div>
    </div>
  );
};

AlertBox.propTypes = {
  type: PropTypes.oneOf(["error", "success", "warning", "info"]),
  message: PropTypes.string,
};

AlertBox.defaultProps = {
  type: "error",
};

export default withStyles(useStyles)(AlertBox);
