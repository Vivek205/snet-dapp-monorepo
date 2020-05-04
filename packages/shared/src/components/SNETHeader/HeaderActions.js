import React from "react";
import PropTypes from "prop-types";

const HeaderActions = ({ isLoggedIn, LoggedInActions, LoggedOutActions, headerType }) => {
  if (isLoggedIn) {
    return <LoggedInActions headerType={headerType} />;
  }
  return <LoggedOutActions />;
};

HeaderActions.propTypes = {
  LoggedInActions: PropTypes.elementType,
  LoggedOutActions: PropTypes.elementType,
};

export default HeaderActions;
