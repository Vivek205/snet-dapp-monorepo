import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";

import BySession from "./BySession";

import { useStyles } from "./styles";

class StakeTransitions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
    };
  }

  handleTabChange = (_event, value) => {
    this.setState({ selectedTab: value });
  };

  render() {
    const { selectedTab } = this.state;
    const { classes } = this.props;
    return (
      <Grid container className={classes.stakeTransactionContainer}>
        <div className={classes.header}>
          <Typography variant="h6">Transaction History</Typography>
        </div>
        <div className={classes.tabsContainer}>
          <AppBar position="static" color="default" className={classes.appBar}>
            <Tabs value={selectedTab} onChange={this.handleTabChange} indicatorColor="primary" textColor="primary">
              <Tab className="singularity-tab" label="By Session" value={0} />
              <Tab className="singularity-tab" label="Chronological Log" value={1} />
            </Tabs>
          </AppBar>
          {selectedTab === 0 && (
            <Typography component="div" className={classes.tabDetailsContainer}>
              <BySession />
            </Typography>
          )}
          {selectedTab === 1 && (
            <Typography component="div" className={classes.tabDetailsContainer}>
              Chronological Logs component will go here
            </Typography>
          )}
        </div>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(StakeTransitions);
