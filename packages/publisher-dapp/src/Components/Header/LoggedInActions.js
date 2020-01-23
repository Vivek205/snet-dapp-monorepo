import React, { Fragment, useState } from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import UserProfilePopUp from "./UserProfilePopUp";
import { useStyles } from "./styles";

const LoggedInActions = () => {
  const classes = useStyles();
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

export default LoggedInActions;
