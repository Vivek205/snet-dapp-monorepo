import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import isEmpty from "lodash/isEmpty";

import { withStyles } from "@material-ui/styles";
import EventIcon from "@material-ui/icons/Event";
import TimerIcon from "@material-ui/icons/Timer";

import Timer from "../../../../Components/CreateStake/SessionTime/Timer";
import { useStyles } from "./styles";
import InlineLoader from "../../../../Components/InlineLoader";

const stateSelector = state => ({
  isLoading: state.loader.txnList.isLoading,
});

const Current = ({ classes, upcomingSessions, currentTime, hightlightedIndex, interval }) => {
  const { isLoading } = useSelector(state => stateSelector(state));

  const handleTimerCompletion = () => {
    // console.log("Timer is completed");
  };

  if (isLoading) {
    return <InlineLoader />;
  }

  return (
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
                <div className={index === hightlightedIndex ? classes.addBorder : classes.addPadding}>
                  <span className={classes.stakeNumber}>Stake Session #{upcomingSession.window_id}</span>
                  <div className={classes.stakeDateTimeDetails}>
                    <p>
                      <EventIcon />
                      {moment.unix(upcomingSession.start_period).format("DD MMM YYYY")}
                    </p>
                    <span>
                      {moment
                        .unix(upcomingSession.start_period)
                        .utc()
                        .format("h:mm")}{" "}
                      GMT
                    </span>
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
                </div>
              </li>
            ) : null
          )}
          <li className={classes.upcomingSessionDetails}>
            <span>More to follow...</span>
          </li>
        </ul>
      ) : (
        <span className={classes.noUpcomingSessionTxt}>No upcoming sessions</span>
      )}
    </div>
  );
};

export default withStyles(useStyles)(Current);
