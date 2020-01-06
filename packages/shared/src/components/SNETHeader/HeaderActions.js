import React from "react";
import PropTypes from "prop-types";

const HeaderActions = ({ isLoggedIn, LoggedInActions, LoggedOutActions }) => {
  if (isLoggedIn) {
    return <LoggedInActions />;
  }
  return <LoggedOutActions />;
};

HeaderActions.propTypes = {
  LoggedInActions: PropTypes.elementType,
  LoggedOutActions: PropTypes.elementType,
};

export default HeaderActions;
