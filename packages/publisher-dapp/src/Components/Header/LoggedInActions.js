import React, { Fragment, useState } from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import UserProfilePopUp from "./UserProfilePopUp";

const LoggedInActions = () => {
	const [showProfilePopup, setShowProfilePopup] = useState(false);

	const handleClick = () => {
		setShowProfilePopup(!showProfilePopup)
	}

	if (showProfilePopup) {    
  	return <UserProfilePopUp />;
  }

  return (
    <Fragment>
      <NotificationsIcon fontSize="large" />
      <AccountCircleIcon fontSize="large" onClick={handleClick} />
    </Fragment>
  );
};

export default LoggedInActions;
