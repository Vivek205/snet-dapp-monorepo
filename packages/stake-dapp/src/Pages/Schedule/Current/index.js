import React from "react";

import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import ErrorIcon from "@material-ui/icons/Error";

import SNETButton from "shared/dist/components/SNETButton";

import { useStyles } from "./styles";

const Current = ({ classes }) => {
  return (
    <div className={classes.currentMainContainer}>
      <div className={classes.activeSessionContainer}>
        <span>Active Session</span>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.activeSessionBox}>
          <Grid item xs={12} sm={6} md={8} lg={8} className={classes.activeSessionDetails}>
            <span>Stake Session Aug 2020 #16</span>
            <span>live</span>
            <div>
              <div>
                <p>
                  <ErrorIcon />
                  Opening Date
                </p>
                <p>
                  24 Aug 2021 06:00 <span>GMT</span>
                </p>
              </div>
              <div>
                <p>
                  <ErrorIcon />
                  Closing Date
                </p>
                <p>
                  30 Aug 2021 23:30 <span>GMT</span>
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} className={classes.activeSessionBtnContainer}>
            <SNETButton children="view stake details" color="primary" variant="contained" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.upcomingSessionContainer}>
        <span>Upcoming Sessions</span>
        <ul>
          <li className={classes.activeSessionDetails}>
            <span className={classes.stakeNumber}>Stake Session #17</span>
            <div className={classes.stakeDateTimeDetails}>
              <p>24 Sep 2021</p>
              <span>06:00 GMT</span>
            </div>
            <div className={classes.sessionOpeningTime}>
              <p>Session Opens In</p>
              <div>
                <span>06</span>
                <span>D</span>
              </div>
              <div>
                <span>23</span>
                <span>H</span>
              </div>
              <div>
                <span>14</span>
                <span>M</span>
              </div>
              <div>
                <span>02</span>
                <span>S</span>
              </div>
            </div>
          </li>
          <li className={classes.upcomingSessionDetails}>
            <span className={classes.stakeNumber}>Stake Session #18</span>
            <div className={classes.stakeDateTimeDetails}>
              <p>24 Sep 2021</p>
              <span>06:00 GMT</span>
            </div>
          </li>
          <li className={classes.upcomingSessionDetails}>
            <span className={classes.stakeNumber}>Stake Session #18</span>
            <div className={classes.stakeDateTimeDetails}>
              <p>24 Sep 2021</p>
              <span>06:00 GMT</span>
            </div>
          </li>
          <li className={classes.upcomingSessionDetails}>
            <span className={classes.stakeNumber}>Stake Session #18</span>
            <div className={classes.stakeDateTimeDetails}>
              <p>24 Sep 2021</p>
              <span>06:00 GMT</span>
            </div>
          </li>
          <li className={classes.upcomingSessionDetails}>
            <span className={classes.stakeNumber}>Stake Session #18</span>
            <div className={classes.stakeDateTimeDetails}>
              <p>24 Sep 2021</p>
              <span>06:00 GMT</span>
            </div>
          </li>
          <li className={classes.upcomingSessionDetails}>
            <span className={classes.stakeNumber}>Stake Session #18</span>
            <div className={classes.stakeDateTimeDetails}>
              <p>24 Sep 2021</p>
              <span>06:00 GMT</span>
            </div>
          </li>
          <li className={classes.upcomingSessionDetails}>
            <span className={classes.stakeNumber}>Stake Session #18</span>
            <div className={classes.stakeDateTimeDetails}>
              <p>24 Sep 2021</p>
              <span>06:00 GMT</span>
            </div>
          </li>
          <span>More to follow...</span>
        </ul>
      </div>
    </div>
  );
};

export default withStyles(useStyles)(Current);
