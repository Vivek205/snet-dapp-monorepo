import React from "react";
import ListItem from "@material-ui/core/ListItem";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import SNETList from "shared/dist/components/SNETList";
import StyledDropdown from "shared/dist/components/StyledDropdown";

import { useStyles } from "./styles";
import NavbarLink from "./NavbarLink";
import { navbarItems } from "./constant";

const NavigationBar = props => {
  const { headerColor } = props;
  const classes = useStyles(props);
  const location = useLocation();

  if (location.pathname.includes("/servicecreation/")) {
    return (
      <nav>
        <SNETList display="inline" className={classes.navlist}>
          <div className={classes.serviceNameDropdown}>
            <StyledDropdown
              name="poem_portraits"
              value="poem_portraits"
              list={[{ value: "poem_portraits", label: "Poem Portraits" }]}
            />
          </div>
        </SNETList>
      </nav>
    );
  }

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
