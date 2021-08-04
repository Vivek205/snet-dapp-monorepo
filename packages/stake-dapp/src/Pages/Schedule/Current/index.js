import React, { useState } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import ErrorIcon from "@material-ui/icons/Error";
import EventIcon from "@material-ui/icons/Event";
import TimerIcon from "@material-ui/icons/Timer";

import Timer from "../../../Components/CreateStake/SessionTime/Timer";
import { GlobalRoutes } from "../../../GlobalRouter/Routes";

// import NoActiveSessionImg from "shared/dist/assets/images/NoActiveSession.png";
import SNETButton from "shared/dist/components/SNETButton";

import { useStyles } from "./styles";

const Current = ({ classes }) => {
  const upcomingSessionDetails = [
    {
      window_id: 17,
      start_period: 1628413200,
    },
    {
      window_id: 18,
      start_period: 1628413200,
    },
    {
      window_id: 19,
      start_period: 1628413200,
    },
    {
      window_id: 20,
      start_period: 1628413200,
    },
    {
      window_id: 21,
      start_period: 1628413200,
    },
    {
      window_id: 22,
      start_period: 1628413200,
    },
    {
      window_id: 23,
      start_period: 1628413200,
    },
  ];

  const currentTime = moment().unix();
  const [startTime] = useState(currentTime);
  const [endTime] = useState(upcomingSessionDetails[0].start_period);
  const interval = 1000;
  const { isLoggedIn } = useSelector(state => state.user);
  const history = useHistory();

  const handleViewStakeDetails = () => {
    if (isLoggedIn) {
      history.push(GlobalRoutes.LANDING.path);
    } else {
      history.push(GlobalRoutes.LOGIN.path);
    }
  };

  return (
    <div className={classes.currentMainContainer}>
      <div className={classes.activeSessionContainer}>
        <span className={classes.headingText}>Active Session</span>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.activeSessionBox}>
          <Grid item xs={12} sm={12} md={8} lg={8} className={classes.activeSessionDetails}>
            <span>Stake Session Aug 2020 #16</span>
            <span className={classes.tag}>live</span>
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
          <Grid item xs={12} sm={12} md={4} lg={4} className={classes.activeSessionBtnContainer}>
            <SNETButton
              children="view stake details"
              color="primary"
              variant="contained"
              onClick={handleViewStakeDetails}
            />
          </Grid>
        </Grid>
        {/* <Grid item xs={12} sm={12} md={12} lg={12} className={classes.noActiveSessionContainer}>
          <img src={NoActiveSessionImg} alt="No Active Session" />
          <span>No Active Sessions</span>
        </Grid> */}
      </div>
      <div className={classes.upcomingSessionContainer}>
        <span className={classes.headingText}>Upcoming Sessions</span>
        <ul>
          {upcomingSessionDetails.map((data, index) => (
            <li
              className={index === 0 ? classes.activeUpcomingSessionDetails : classes.upcomingSessionDetails}
              key={index}
            >
              <span className={classes.stakeNumber}>Stake Session #{data.window_id}</span>
              <div className={classes.stakeDateTimeDetails}>
                <p>
                  <EventIcon />
                  {moment.unix(data.start_period).format("DD MMM YYYY")}
                </p>
                {/* <span>06:00 GMT</span> */}
              </div>
              {index === 0 ? (
                <div className={classes.sessionOpeningTime}>
                  <p>
                    <TimerIcon />
                    Session Opens In
                  </p>
                  <div className={classes.dhmsContainer}>
                    <Timer key="waitToOpen" startTime={startTime} endTime={endTime} interval={interval} />
                  </div>
                </div>
              ) : null}
            </li>
          ))}
          <li>
            <span>More to follow...</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default withStyles(useStyles)(Current);
