import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import SNETButton from "shared/dist/components/SNETButton";
import { useStyles } from "./styles";
import { cogsToAgi } from "shared/dist/utils/Pricing";

const Pricing = ({ classes, groups }) => {
  return (
    <Grid container className={classes.revenueContainer}>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.pendingClaimsAndTotalContainer}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <span className={classes.title}>Regions:</span>
          <span className={classes.value}>{groups.length}</span>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <span className={classes.title}>Price:</span>
          <span className={classes.value}>{cogsToAgi(groups[0].pricing[0].priceInCogs)} AGI</span>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.pendingClaimsAndTotalContainer}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <span className={classes.title}>Pricing Model</span>
          <span className={classes.value}>{groups[0].pricing[0].priceModel}</span>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.btnContainer}>
        <SNETButton children="view claims" color="primary" variant="text" />
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(Pricing);
