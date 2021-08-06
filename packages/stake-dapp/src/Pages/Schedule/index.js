import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/styles";

import CurrentComponent from "./Current";
import PastComponent from "./Past";
import { scheduleActions, stakeActions } from "../../Services/Redux/actionCreators";

import SNETTextfield from "shared/dist/components/SNETTextfield";
import SNETButton from "shared/dist/components/SNETButton";
import ComputeMailsImage from "shared/dist/assets/images/ComputeMails.png";
import { useStyles } from "./styles";

const stateSelector = state => ({
  stakeWindowsSummary: state.stakeReducer.stakeWindowsSummary,
});

const Schedule = ({ classes }) => {
  const [value, setValue] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);
  const [upcomingSession, setUpcomingSession] = useState([]);
  const dispatch = useDispatch();
  const { stakeWindowsSummary } = useSelector(state => stateSelector(state));

  const handleChange = (_event, newValue) => {
    setValue(newValue);
    setSelectedTab(newValue);
  };

  const fetchUpcomingSessions = useCallback(async () => {
    try {
      setUpcomingSession(await dispatch(scheduleActions.fetchUpcomingSessions()));
    } catch (error) {
      // Ignore as we show appropriate error
    }
  }, [dispatch]);

  const fetchStakeWindowsSummary = useCallback(() => {
    try {
      dispatch(stakeActions.fetchStakeWindowsSummary());
    } catch (_error) {
      // Ignore as we show appropriate error
    }
  }, [dispatch]);

  useEffect(() => {
    fetchUpcomingSessions();
    fetchStakeWindowsSummary();
  }, [fetchUpcomingSessions, fetchStakeWindowsSummary]);

  return (
    <div className={classes.scheduleMainContainer}>
      <div className={classes.scheduleWrapper}>
        <Typography>Staking Schedule</Typography>
        <AppBar position="static" className={classes.appBar}>
          <Tabs
            className={classes.tabs}
            value={value}
            onChange={handleChange}
            variant="scrollable"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab className={classes.tab} label={<span>Current</span>} value={0} />
            <Tab className={classes.tab} label={<span>Past</span>} value={1} />
          </Tabs>
        </AppBar>
        {selectedTab === 0 && (
          <div className={classes.accordionContainer}>
            <CurrentComponent activeSessionDetail={stakeWindowsSummary[0]} upcomingSessions={upcomingSession} />
          </div>
        )}
        {selectedTab === 1 && (
          <div className={classes.accordionContainer}>
            <PastComponent pasSessiontData={stakeWindowsSummary} />
          </div>
        )}
      </div>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.signUpContainer}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h2">Staking Notification</Typography>
          <Typography>Get notified by email when the next staking window is open - Don’t miss out!</Typography>
          <form
            action="https://singularitynet.us16.list-manage.com/subscribe/post?u=d74195510c25bf501caf3011d&id=a804df2efd"
            method="post"
            target="_blank"
            name="mc-embedded-subscribe-form"
            noValidate=""
          >
            <SNETTextfield name="EMAIL" label="email" />
            <SNETButton type="submit" children="subscribe" color="primary" variant="contained" />
          </form>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <img src={ComputeMailsImage} alt="Computer And Mails" />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(useStyles)(Schedule);
