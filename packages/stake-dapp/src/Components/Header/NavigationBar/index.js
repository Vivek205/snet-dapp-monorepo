import React from "react";
import ListItem from "@material-ui/core/ListItem";
import PropTypes from "prop-types";

import SNETList from "shared/dist/components/SNETList";
import StyledMenu from "shared/dist/components/StyledMenu";

import { useStyles } from "./styles";
import NavbarLink from "./NavbarLink";
import { navbarItems, dropdowns } from "./constant";

const NavigationBar = props => {
  const { headerColor } = props;
  const classes = useStyles(props);

  return (
    <nav className={classes.navigationLinks}>
      <SNETList display="inline" className={classes.navlist}>
        {navbarItems.map(navbarItem => {
          if (navbarItem.type === "link") {
            return (
              <ListItem key={navbarItem.label} children={<NavbarLink {...navbarItem} headerColor={headerColor} />} />
            );
          }
          return null;
        })}
        {dropdowns.map(dropdown => (
          <div key={dropdown.label} className={classes.headerDropDown}>
            <StyledMenu label={dropdown.label} list={dropdown.list} />
          </div>
        ))}
      </SNETList>
    </nav>
  );
};

NavigationBar.propTypes = {
  navbarItems: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      activeLinks: PropTypes.arrayOf(PropTypes.string),
      label: PropTypes.string,
      openInNewTab: PropTypes.bool,
      to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    })
  ),
  headerColor: PropTypes.string,
};

export default NavigationBar;
