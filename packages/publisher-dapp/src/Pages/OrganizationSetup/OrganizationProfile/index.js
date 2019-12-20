import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

import BasicDetails from "./BasicDetails";
import SNETTextfield from "shared/dist/components/SNETTextfield";
import { useStyles } from "./styles";

const OrganizationProfile = ({ classes }) => {
  return (
  	<Grid className={classes.box}>
  		<Typography variant="h5">OrganizationProfile</Typography>
  		<BasicDetails />
  	</Grid>
  )
};

export default withStyles(useStyles)(OrganizationProfile);
