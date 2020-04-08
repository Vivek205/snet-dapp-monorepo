import React, { Fragment, useState } from "react";
import { withStyles } from "@material-ui/styles";
import CloseIcon from "@material-ui/icons/Close";

import HeaderActions from "../HeaderActions";
import NavItem from "../Navbar/NavItem";
import { useStyles } from "./styles";

const MobileHeader = ({
  classes,
  isLoggedIn,
  mobileNavLinks,
  mobileDropDown,
  LoggedInActions,
  LoggedOutActions,
  color,
}) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  if (!openMobileMenu) {
    return (
      <div
        className={`${classes.hamburger} ${color === "white" ? classes.whiteHamburger : null}`}
        onClick={toggleMobileMenu}
      >
        <span />
        <span />
        <span />
      </div>
    );
  }

  return (
    <Fragment>
      <div className={classes.mobileNavContainer}>
        <div className={classes.closeMenuIcon}>
          <CloseIcon onClick={toggleMobileMenu} />
        </div>
        <nav className={classes.mobileNavigation}>
          <ul>
            {mobileNavLinks.map(tab => (
              <NavItem key={tab.label} title={tab.label} link={tab.to} active={tab.active} />
            ))}
            {mobileDropDown.map(dropdown => (
              <div key={dropdown.label} className={classes.subMenues}>
                <Fragment>
                  <NavItem title={dropdown.label} subHeader />
                  {dropdown.list.map(item => (
                    <NavItem key={item.label} title={item.label} link={item.link} subListItem />
                  ))}
                </Fragment>
              </div>
            ))}
          </ul>
          <div className={`${classes.mobileActionBtns} ${isLoggedIn ? classes.loggedInState : ""}`}>
            <HeaderActions
              isLoggedIn={isLoggedIn}
              LoggedInActions={LoggedInActions}
              LoggedOutActions={LoggedOutActions}
            />
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default withStyles(useStyles)(MobileHeader);
