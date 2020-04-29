import React, { useState } from "react";
import { Link } from "react-router-dom";

// import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { withStyles } from "@material-ui/core/styles";

import { GlobalRoutes } from "../../GlobalRouter/Routes";
import UserProfilePopUp from "./UserProfilePopUp";
import { useStyles } from "./styles";

const LoggedInActions = ({ classes }) => {
  const [showProfilePopup, setShowProfilePopup] = useState(false);

  const handleProfileIconClick = () => {
    setShowProfilePopup(!showProfilePopup);
  };

  return (
    <div className={classes.loggedInActionsContainer}>
      {/*<NotificationsIcon fontSize="large" className={classes.NotificationsIcon} /> */}
      <div className={classes.faqLink}>
        <Link to={GlobalRoutes.FAQ.path}>
          FAQ Help <HelpOutlineIcon />
        </Link>
      </div>
      <AccountCircleIcon fontSize="large" onClick={handleProfileIconClick} className={classes.AccountCircleIcon} />
      <UserProfilePopUp show={showProfilePopup} handleClose={() => setShowProfilePopup(false)} />
    </div>
  );
};

export default withStyles(useStyles)(LoggedInActions);
