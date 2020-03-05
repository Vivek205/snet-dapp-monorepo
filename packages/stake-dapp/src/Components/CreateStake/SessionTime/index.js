import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import ArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import InfoIcon from "@material-ui/icons/Info";

import { useStyles } from "./styles";
import { userPreferenceTypes } from "../../../Utils/user";
import { preferenceActions } from "../../../Services/Redux/actionCreators/userActions";

const SessionTime = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // TODO - Get the state from the Redux to set as Default Checked value
  const [stakeNotification, setStakeNotification] = useState(false);

  const handleStakeNotificationChange = event => {
    setStakeNotification(event.target.checked);

    const emailPreferences = {
      [userPreferenceTypes.STAKE_NOTIFICATION]: event.target.checked,
    };

    dispatch(preferenceActions.updateEmailPreferences(emailPreferences));
  };

  return (
    <div className={classes.sessionTimeContainer}>
      <div className={classes.header}>
        <Typography variant="h6">Session Time</Typography>
        <ArrowUpIcon />
      </div>
      <div className={classes.content}>
        <Typography variant="subtitle1">Open Staking for: </Typography>
        <div className={classes.time}>
          <div>
            <Typography className={classes.number}>06</Typography>
            <Typography className={classes.title}>d</Typography>
          </div>
          <div>
            <Typography className={classes.number}>12</Typography>
            <Typography className={classes.title}>h</Typography>
          </div>
          <div>
            <Typography className={classes.number}>38</Typography>
            <Typography className={classes.title}>m</Typography>
          </div>
          <div>
            <Typography className={classes.number}>07</Typography>
            <Typography className={classes.title}>s</Typography>
          </div>
        </div>
        <Typography className={classes.closingTime}>Closes: 02/25/2020</Typography>
        <div className={classes.checkbox}>
          <InfoIcon />
          <FormControlLabel
            control={<Checkbox color="primary" checked={stakeNotification} onClick={handleStakeNotificationChange} />}
            label="Staking notifications"
          />
        </div>
      </div>
    </div>
  );
};

export default SessionTime;
