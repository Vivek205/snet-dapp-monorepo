import React from "react";
import PropTypes from "prop-types";
import SNETButton from "../SNETButton";

const HeaderActions = ({ isLoggedIn, actions }) => {
  if (isLoggedIn) {
    return null;
  }
  return actions.map(action => <SNETButton key={action.children} {...action} />);
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
};

export default HeaderActions;
