import React from "react";
import PropTypes from "prop-types";

const NavBar = ({ NavigationBar }) => {
  return <NavigationBar />;
};

NavBar.propTypes = {
  NavigationBar: PropTypes.elementType,
};

export default NavBar;
