import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import isEmpty from "lodash/isEmpty";
import { useHistory } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import ErrorIcon from "@material-ui/icons/Error";

import NoActiveSessionImg from "shared/dist/assets/images/NoActiveSession.png";
import SNETButton from "shared/dist/components/SNETButton";

import { useStyles } from "./styles";
import { GlobalRoutes } from "../../../../GlobalRouter/Routes";
import InlineLoader from "../../../../Components/InlineLoader";
import { Fragment } from "react";

const stateSelector = state => ({
  isLoading: state.loader.txnList.isLoading,
});

const ActiveSession = ({ classes, activeSessionDetail, openSessionDetails, currentTimeInDMY, submissionEndPeriod }) => {
  const { isLoading } = useSelector(state => stateSelector(state));
  const { isLoggedIn } = useSelector(state => state.user);
  const history = useHistory();

  const handleViewIncubation = () => {
    if (isLoggedIn) {
      history.push(GlobalRoutes.LANDING.path.replace(":activetab", "incubating"));
    } else {
      history.push(GlobalRoutes.LOGIN.path);
    }
  };

  const handleViewStake = () => {
    if (isLoggedIn) {
      history.push(GlobalRoutes.LANDING.path.replace(":activetab", "openstake"));
    } else {
      history.push(GlobalRoutes.LOGIN.path);
    }
  };

  if (isLoading) {
    return <InlineLoader />;
  }

  if (isEmpty(activeSessionDetail) && isEmpty(openSessionDetails)) {
    return (
      <Fragment>
        <span className={classes.headingText}>Active Session</span>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.noActiveSessionContainer}>
          <img src={NoActiveSessionImg} alt="No Active Session" />
          <span>No Sessions</span>
        </Grid>
      </Fragment>
    );
  }

  return (
    <div className={classes.activeSessionContainer}>
      <span className={classes.headingText}>Active Session</span>
      <div>
        {currentTimeInDMY < submissionEndPeriod && !isEmpty(activeSessionDetail) ? (
          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.activeSessionBox}>
            <Grid item xs={12} sm={12} md={8} lg={8} className={classes.activeOpenSessionDetails}>
              <span>Stake Session Aug 2020 #{activeSessionDetail ? activeSessionDetail.window_id : ""}</span>
              <span className={classes.activeTag}>incubating</span>
              <div>
                <div>
                  <p>
                    <ErrorIcon />
                    Opening Date
                  </p>
                  {activeSessionDetail ? (
                    <p>
                      {moment
                        .unix(activeSessionDetail.start_period)
                        .utc()
                        .format("DD MMM YYYY hh:ss")}{" "}
                      <span>GMT</span>
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
                      {moment
                        .unix(activeSessionDetail.end_period)
                        .utc()
                        .format("DD MMM YYYY hh:ss")}{" "}
                      <span>GMT</span>
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} className={classes.activeOpenSessionBtnContainer}>
              <SNETButton
                children="View Incubation"
                color="primary"
                variant="contained"
                onClick={handleViewIncubation}
              />
            </Grid>
          </Grid>
        ) : null}
      </div>
      <div>
        {currentTimeInDMY < submissionEndPeriod && !isEmpty(openSessionDetails) ? (
          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.openSessionBox}>
            <Grid item xs={12} sm={12} md={8} lg={8} className={classes.activeOpenSessionDetails}>
              <span>Stake Session Aug 2020 #{openSessionDetails ? openSessionDetails.window_id : ""}</span>
              <span className={classes.liveTag}>open</span>
              <div>
                <div>
                  <p>
                    <ErrorIcon />
                    Opening Date
                  </p>
                  {openSessionDetails ? (
                    <p>
                      {moment
                        .unix(openSessionDetails.start_period)
                        .utc()
                        .format("DD MMM YYYY hh:ss")}{" "}
                      <span>GMT</span>
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
                      {moment
                        .unix(openSessionDetails.end_period)
                        .utc()
                        .format("DD MMM YYYY hh:ss")}{" "}
                      <span>GMT</span>
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} className={classes.activeOpenSessionBtnContainer}>
              <SNETButton children="view stake details" color="primary" variant="contained" onClick={handleViewStake} />
            </Grid>
          </Grid>
        ) : null}
      </div>
    </div>
  );
};

export default withStyles(useStyles)(ActiveSession);
