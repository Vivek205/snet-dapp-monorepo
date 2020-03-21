import React, { useState } from "react";
// import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useLocation } from "react-router-dom";

import UserProfilePopUp from "./UserProfilePopUp";
import { useStyles } from "./styles";
import { GlobalRoutes } from "../../GlobalRouter/Routes";
import { useSelector } from "react-redux";

const LoggedInActions = ({ classes }) => {
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const location = useLocation();
  const orgName = useSelector(state => state.organization.name);

  const handleProfileIconClick = () => {
    setShowProfilePopup(!showProfilePopup);
  };

  if (location.pathname.includes(location.pathname.match(GlobalRoutes.AI_SERVICE_CREATION.match))) {
    return (
      <div className={classes.loggedInActionsContainer} onClick={handleProfileIconClick}>
        {/* <NotificationsIcon fontSize="large" className={classes.NotificationsIcon} /> */}
        <AccountCircleIcon fontSize="large" className={classes.AccountCircleIcon} />
        <UserProfilePopUp show={showProfilePopup} handleClose={() => setShowProfilePopup(false)} />
        <div className={classes.orgNameContainer}>
          <Typography className={classes.orgName}>{orgName}</Typography>
          <Typography className={classes.role}>Owner</Typography>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.loggedInActionsContainer} onClick={handleProfileIconClick}>
      {/*<NotificationsIcon fontSize="large" className={classes.NotificationsIcon} /> */}
      <AccountCircleIcon fontSize="large" className={classes.AccountCircleIcon} />
      <UserProfilePopUp show={showProfilePopup} handleClose={() => setShowProfilePopup(false)} />
    </div>
  );
};

export default withStyles(useStyles)(LoggedInActions);
