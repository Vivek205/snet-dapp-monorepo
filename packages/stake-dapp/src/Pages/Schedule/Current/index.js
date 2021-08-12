import React from "react";
import moment from "moment";

import { withStyles } from "@material-ui/styles";

import { useStyles } from "./styles";
import ActiveSession from "./ActiveSession";
import UpcomingSession from "./UpcomingSession";

const Current = ({ classes, activeSessionDetail, openSessionDetails, upcomingSessions }) => {
  const currentTime = moment().unix();
  const interval = 1000;

  const submissionEndPeriod = moment
    .unix(activeSessionDetail ? activeSessionDetail.submissionEndPeriod : "")
    .format("DD MMM YYYY hh:ss");

  const currentTimeInDMY = moment.unix(currentTime).format("DD MMM YYYY hh:ss");

  const hightlightedIndex = upcomingSessions
    ? upcomingSessions.findIndex(session => currentTime < session.start_period)
    : null;

  return (
    <div className={classes.currentMainContainer}>
      <ActiveSession
        activeSessionDetail={activeSessionDetail}
        openSessionDetails={openSessionDetails}
        currentTimeInDMY={currentTimeInDMY}
        submissionEndPeriod={submissionEndPeriod}
      />
      <UpcomingSession
        upcomingSessions={upcomingSessions}
        currentTime={currentTime}
        hightlightedIndex={hightlightedIndex}
        interval={interval}
      />
    </div>
  );
};

export default withStyles(useStyles)(Current);
