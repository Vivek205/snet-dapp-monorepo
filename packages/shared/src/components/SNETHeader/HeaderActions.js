import React from "react";
import PropTypes from "prop-types";
import SNETButton from "../SNETButton";

const buttonColor = {
  white: "primary",
  purple: "purple",
};

const HeaderActions = ({ isLoggedIn, actions, headerColor }) => {
  if (isLoggedIn) {
    return null;
  }
  return actions.map(action => <SNETButton key={action.children} {...action} color={buttonColor[headerColor]} />);
};

HeaderActions.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      color: PropTypes.string,
      vaiant: PropTypes.string,
      handler: PropTypes.func,
    })
  ),
  headerColor: PropTypes.string,
};

export default HeaderActions;
