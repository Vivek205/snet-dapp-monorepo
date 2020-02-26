import React from "react";

const AlertHeader = ({ header }) => {
  if (header) {
    return <span>{header}</span>;
  }
  return null;
};

export default AlertHeader;
