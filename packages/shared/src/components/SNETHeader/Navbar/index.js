import React from "react";
import ListItem from "@material-ui/core/ListItem";
import PropTypes from "prop-types";

import { useStyles } from "./styles";
import SNETList from "../../SNETList";
import NavbarLink from "./NavbarLink";

const Navbar = ({ navbarItems }) => {
  const classes = useStyles();

  return (
    <nav>
      <SNETList display="inline" className={classes.navlist}>
        {navbarItems.map(navbarItem => {
          if (navbarItem.type === "link") {
            return <ListItem key={navbarItem.label} children={<NavbarLink {...navbarItem} />} />;
          }
          return null;
        })}
      </SNETList>
    </nav>
  );
};

Navbar.propTypes = {
  navbarItems: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      activeLinks: PropTypes.arrayOf(PropTypes.string),
      label: PropTypes.string,
      openInNewTab: PropTypes.bool,
      to: PropTypes.oneOf(PropTypes.string, PropTypes.object),
    })
  ),
};

export default Navbar;
