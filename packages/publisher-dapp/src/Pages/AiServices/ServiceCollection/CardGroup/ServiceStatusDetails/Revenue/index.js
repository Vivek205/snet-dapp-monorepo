import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import SNETButton from "shared/dist/components/SNETButton";
import { useStyles } from "./styles";

const Revenue = ({ classes }) => {
  return (
    <Grid container className={classes.revenueContainer}>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.pendingClaimsAndTotalContainer}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <span className={classes.title}>Pending Claims:</span>
          <span className={classes.value}>81</span>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <span className={classes.title}>Total:</span>
          <span className={classes.value}>258</span>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.btnContainer}>
        <SNETButton children="view claims" color="primary" variant="text" />
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(Revenue);
