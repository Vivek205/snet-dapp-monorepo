import React from "react";

const AlertIcon = ({ icon: Icon }) => {
  if (Icon) {
    return <Icon />;
  }
  return null;
};

export default AlertIcon;
