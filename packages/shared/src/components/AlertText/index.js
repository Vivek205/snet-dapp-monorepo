import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { useStyles } from "./styles";
import { alertTypes } from "shared/dist/components/AlertBox";

const textColor = {
  error: alertTypes.ERROR,
  success: alertTypes.SUCCESS,
  warning: alertTypes.WARNING,
  info: alertTypes.INFO,
};

const AlertText = ({ type, message }) => {
  const classes = useStyles();

  if (message) {
    return <span className={clsx(classes.errorMsg, classes[textColor[type]])}>{message}</span>;
  }
  return null;
};

AlertText.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(["error", "success", "warning", "info"]),
};

AlertText.defaultProps = {
  type: "error",
  message: undefined,
};

export default AlertText;
