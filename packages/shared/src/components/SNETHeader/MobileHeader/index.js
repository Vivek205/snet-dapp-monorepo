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
  const stopProgationOfEventToHeader = e => {
    e.stopPropagation();
  };

  const toggleMobileMenu = e => {
    stopProgationOfEventToHeader(e);
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
    <div className={classes.mobileNavContainer} onClick={stopProgationOfEventToHeader}>
      <div className={classes.closeMenuIcon}>
        <CloseIcon onClick={toggleMobileMenu} />
      </div>
      <nav className={classes.mobileNavigation}>
        <ul className={isLoggedIn ? classes.hideNav : null}>
          {mobileNavLinks.map(tab => (
            <NavItem key={tab.label} title={tab.label} link={tab.to} active={tab.active} />
          ))}
          {mobileDropDown
            ? mobileDropDown.map(dropdown => (
                <div key={dropdown.label} className={classes.subMenues}>
                  <Fragment>
                    <NavItem title={dropdown.label} subHeader />
                    {dropdown.list.map(item => (
                      <NavItem key={item.label} title={item.label} link={item.link} subListItem />
                    ))}
                  </Fragment>
                </div>
              ))
            : null}
        </ul>
        <div className={`${classes.mobileActionBtns} ${color === "white" ? classes.whiteHeader : null}`}>
          <HeaderActions
            isLoggedIn={isLoggedIn}
            LoggedInActions={LoggedInActions}
            LoggedOutActions={LoggedOutActions}
            headerType="mobile"
          />
        </div>
      </nav>
    </div>
  );
};

export default withStyles(useStyles)(MobileHeader);
