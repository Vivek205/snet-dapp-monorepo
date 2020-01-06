import React, { Fragment } from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const LoggedInActions = () => {
  return (
    <Fragment>
      <NotificationsIcon fontSize="large" />
      <AccountCircleIcon fontSize="large" />
    </Fragment>
  );
};

export default LoggedInActions;
