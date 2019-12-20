import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

import SNETTextfield from "shared/dist/components/SNETTextfield";
import SNETTextarea from "shared/dist/components/SNETTextarea";
import { useStyles } from "./styles";

const SupportDetails = ({ classes }) => {
  return (
  	<Grid item xs={12} sm={12} md={12} lg={12} className={classes.supportDetailsContainer}>
      <Typography variant="subtitle1" className={classes.heading}>Support Contact (Optional)</Typography>
      <Typography variant="subtitle2">Please provide your organization contact information for AI Marketplace users to contact you regarding your published AI services.</Typography>
      <SNETTextfield 
        label="Support Email"
        description="This email address will be displayed to AI Marketplace users."
      />
      <SNETTextfield 
        label="Phone Number"
        description="Include plus sign, country code and area code.  For example +1-800-555-1234."
      />
  	</Grid>
  )
};

export default withStyles(useStyles)(SupportDetails);
