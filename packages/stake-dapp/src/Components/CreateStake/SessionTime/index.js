import React from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import ArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import InfoIcon from "@material-ui/icons/Info";

import { useStyles } from "./styles";

const SessionTime = () => {
  const classes = useStyles();

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
          <FormControlLabel control={<Checkbox checked={true} color="primary" />} label="Staking notifications" />
        </div>
      </div>
    </div>
  );
};

export default SessionTime;
