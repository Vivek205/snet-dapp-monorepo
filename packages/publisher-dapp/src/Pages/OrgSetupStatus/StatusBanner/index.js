import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/styles";

import SNETButton from "shared/dist/components/SNETButton";
import { useStyles } from "./styles";

const StatusBanner = ({ classes }) => {
  return (
    <Grid container spacing={24} className={classes.statusBannerContainer}>
      <Grid item xs={12} sm={3} md={3} lg={3} className={classes.statusBannerMedia}>
        <img src="http://placehold.it/302x242" alt="Media" />
      </Grid>
      <Grid item xs={12} sm={9} md={9} lg={9} className={classes.statusBannerContent}>
        <Typography variant="h6">Congratulations! Individual organization entity is approved.</Typography>
        <Typography>You can continue finishing setting up your company details and publish your company entity to the blockchain.  Then you will be ready to create and publish your new AI services to the AI Marketplace.  You can also invite team members to help setup and manage your AI services more efficiently.</Typography>
        <SNETButton children="organization setup" variant="contained" color="primary" />
        <SNETButton children="Invite Team Members" variant="outlined" color="primary" />
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(StatusBanner);
