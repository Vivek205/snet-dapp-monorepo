import React, { Fragment } from "react";

import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";

import { useStyles } from "./styles";
import Notification from "../../Components/Notification";

import StakeTab from "../../Components/StakeTab";

const RFAILanding = ({ classes }) => {
  return (
    <Fragment>
      <Notification />
      <div className={classes.LandingContainer}>
        <div className={classes.mainWrapper}>
          <Grid container spacing={24} className={classes.topSectionCotainer}>
            <Grid item xs={12} sm={3} md={3} lg={3} className={classes.titleContainer}>
              <h2 className={classes.title}>Staking</h2>
            </Grid>
          </Grid>
          <div>
            <StakeTab />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withStyles(useStyles)(RFAILanding);