import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { useStyles } from "../styles";
import Routes from "../../../utility/constants/Routes";

const NavItem = ({ title, link }) => {
  const classes = useStyles();
  const isActive = (unused, { pathname }) => {
    switch (link) {
      case `/${Routes.AI_MARKETPLACE}`: {
        if (pathname === "/" || pathname.includes(Routes.AI_MARKETPLACE)) {
          return true;
        }
        return false;
      }

      default: {
        return pathname === link;
      }
    }
  };

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
};

export default NavItem;
