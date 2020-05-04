import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { useStyles } from "../styles";

const NavItem = ({ title, link, isActive }) => {
  const classes = useStyles();

  return (
    <li className={classes.navLinks}>
      <NavLink to={link} className={classes.navLinksAnchor} activeClassName={classes.activeTab} isActive={isActive}>
        {title}
      </NavLink>
    </li>
  );
};

NavItem.defaultProps = {
  link: "#",
};

NavItem.propTypes = {
  link: PropTypes.string,
  isActive: PropTypes.func,
};

export default NavItem;
