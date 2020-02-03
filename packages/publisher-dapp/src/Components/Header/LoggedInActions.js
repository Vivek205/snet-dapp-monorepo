import React, { Fragment, useState } from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { withStyles } from "@material-ui/core/styles";

import UserProfilePopUp from "./UserProfilePopUp";
import { useStyles } from "./styles";

const LoggedInActions = ({ classes }) => {
  const [showProfilePopup, setShowProfilePopup] = useState(false);

  const handleProfileIconClick = () => {
    setShowProfilePopup(!showProfilePopup);
  };

  return (
    <Fragment>
      <NotificationsIcon fontSize="large" className={classes.NotificationsIcon} />
      <AccountCircleIcon fontSize="large" onClick={handleProfileIconClick} className={classes.AccountCircleIcon} />
      <UserProfilePopUp show={showProfilePopup} handleClose={() => setShowProfilePopup(false)} />
    </Fragment>
  );
};

export default withStyles(useStyles)(LoggedInActions);
