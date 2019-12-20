import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

import SNETTextfield from "shared/dist/components/SNETTextfield";
import { useStyles } from "./styles";

const BasicDetails = ({ classes }) => {
  return (
  	<Grid container className={classes.basicDetailsContainer}>
  		<Typography variant="subtitle2" className={classes.description}>This information that will be displayed as the Provider for all the AI services your company publishes to AI Marketplace</Typography>
  		<SNETTextfield 
  			label="Organization Name"
  			description="The organziation name is displayed to users on the AI Marketplace."
  		/>
  	</Grid>
  )
};

export default withStyles(useStyles)(BasicDetails);
