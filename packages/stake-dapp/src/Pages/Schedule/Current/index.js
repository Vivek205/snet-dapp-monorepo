import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import isEmpty from "lodash/isEmpty";

import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import ErrorIcon from "@material-ui/icons/Error";
import EventIcon from "@material-ui/icons/Event";
import TimerIcon from "@material-ui/icons/Timer";

import Timer from "../../../Components/CreateStake/SessionTime/Timer";
import { GlobalRoutes } from "../../../GlobalRouter/Routes";

import NoActiveSessionImg from "shared/dist/assets/images/NoActiveSession.png";
import SNETButton from "shared/dist/components/SNETButton";

import { useStyles } from "./styles";
import InlineLoader from "../../../Components/InlineLoader";

const stateSelector = state => ({
  isLoading: state.loader.txnList.isLoading,
});

const Current = ({ classes, activeSessionDetail, openSessionDetails, upcomingSessions }) => {
  const currentTime = moment().unix();
  const interval = 1000;
  const { isLoggedIn } = useSelector(state => state.user);
  const history = useHistory();
  const { isLoading } = useSelector(state => stateSelector(state));

  const handlebtnClick = () => {
    if (isLoggedIn) {
      history.push(GlobalRoutes.LANDING.path);
    } else {
      history.push(GlobalRoutes.LOGIN.path);
    }
  };

  const submissionEndPeriod = moment
    .unix(activeSessionDetail ? activeSessionDetail.submissionEndPeriod : "")
    .format("DD MMM YYYY hh:ss");

  const currentTimeInDMY = moment.unix(currentTime).format("DD MMM YYYY hh:ss");

  const handleTimerCompletion = () => {
    // console.log("Timer is completed");
  };

  if (isLoading) {
    return <InlineLoader />;
  }

  const hightlightedIndex = upcomingSessions
    ? upcomingSessions.findIndex(session => currentTime < session.start_period)
    : null;

  return (
    <div className={classes.currentMainContainer}>
      <div className={classes.activeSessionContainer}>
        <span className={classes.headingText}>Active Session</span>
        <div>
          {currentTimeInDMY < submissionEndPeriod && !isEmpty(activeSessionDetail) ? (
            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.activeSessionBox}>
              <Grid item xs={12} sm={12} md={8} lg={8} className={classes.activeOpenSessionDetails}>
                <span>Stake Session Aug 2020 #{activeSessionDetail ? activeSessionDetail.stakeMapIndex : ""}</span>
                <span className={classes.activeTag}>incubation</span>
                <div>
                  <div>
                    <p>
                      <ErrorIcon />
                      Opening Date
                    </p>
                    {activeSessionDetail ? (
                      <p>
                        {moment.unix(activeSessionDetail.start_period).format("DD MMM YYYY hh:ss")} <span>GMT</span>
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    <p>
                      <ErrorIcon />
                      Closing Date
                    </p>
                    {activeSessionDetail ? (
                      <p>
                        {moment.unix(activeSessionDetail.end_period).format("DD MMM YYYY hh:ss")} <span>GMT</span>
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4} className={classes.activeOpenSessionBtnContainer}>
                <SNETButton children="View Incubation" color="primary" variant="contained" onClick={handlebtnClick} />
              </Grid>
            </Grid>
          ) : (
            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.noActiveSessionContainer}>
              <img src={NoActiveSessionImg} alt="No Active Session" />
              <span>No Incubation Sessions</span>
            </Grid>
          )}
        </div>
        <div>
          {currentTimeInDMY < submissionEndPeriod && !isEmpty(openSessionDetails) ? (
            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.openSessionBox}>
              <Grid item xs={12} sm={12} md={8} lg={8} className={classes.activeOpenSessionDetails}>
                <span>Stake Session Aug 2020 #{openSessionDetails ? openSessionDetails.window_id : ""}</span>
                <span className={classes.liveTag}>live</span>
                <div>
                  <div>
                    <p>
                      <ErrorIcon />
                      Opening Date
                    </p>
                    {openSessionDetails ? (
                      <p>
                        {moment.unix(openSessionDetails.start_period).format("DD MMM YYYY hh:ss")} <span>GMT</span>
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    <p>
                      <ErrorIcon />
                      Closing Date
                    </p>
                    {openSessionDetails ? (
                      <p>
                        {moment.unix(openSessionDetails.end_period).format("DD MMM YYYY hh:ss")} <span>GMT</span>
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4} className={classes.activeOpenSessionBtnContainer}>
                <SNETButton
                  children="view stake details"
                  color="primary"
                  variant="contained"
                  onClick={handlebtnClick}
                />
              </Grid>
            </Grid>
          ) : (
            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.noActiveSessionContainer}>
              <img src={NoActiveSessionImg} alt="No Active Session" />
              <span>No Live Sessions</span>
            </Grid>
          )}
        </div>
      </div>
      <div className={classes.upcomingSessionContainer}>
        <span className={classes.headingText}>Upcoming Sessions</span>
        {!isEmpty(upcomingSessions) ? (
          <ul>
            {upcomingSessions.map((upcomingSession, index) =>
              currentTime < upcomingSession.start_period ? (
                <li
                  className={
                    index === hightlightedIndex ? classes.activeUpcomingSessionDetails : classes.upcomingSessionDetails
                  }
                  key={index}
                >
                  <span className={classes.stakeNumber}>Stake Session #{upcomingSession.window_id}</span>
                  <div className={classes.stakeDateTimeDetails}>
                    <p>
                      <EventIcon />
                      {moment.unix(upcomingSession.start_period).format("DD MMM YYYY")}
                    </p>
                    <span>{moment.unix(upcomingSession.start_period).format("hh:mm")} GMT</span>
                  </div>
                  {index === hightlightedIndex && upcomingSession.start_period ? (
                    <div className={classes.sessionOpeningTime}>
                      <p>
                        <TimerIcon />
                        Session Opens In
                      </p>
                      <div className={classes.dhmsContainer}>
                        <Timer
                          key="waitToOpen"
                          startTime={currentTime}
                          endTime={upcomingSession.start_period}
                          interval={interval}
                          handleTimerCompletion={handleTimerCompletion}
                        />
                      </div>
                    </div>
                  ) : null}
                </li>
              ) : null
            )}
            <li className={classes.upcomingSessionDetails}>
              <span>More to follow...</span>
            </li>
          </ul>
        ) : (
          <span>No upcoming sessions</span>
        )}
      </div>
    </div>
  );
};

export default withStyles(useStyles)(Current);
