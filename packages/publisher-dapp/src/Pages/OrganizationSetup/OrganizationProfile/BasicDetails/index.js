import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

import SNETTextfield from "shared/dist/components/SNETTextfield";
import SNETTextarea from "shared/dist/components/SNETTextarea";
import { useStyles } from "./styles";

const BasicDetails = ({ classes }) => {
  return (
  	<Grid container className={classes.basicDetailsContainer}>
  		<Typography variant="subtitle2" className={classes.description}>This information that will be displayed as the Provider for all the AI services your company publishes to AI Marketplace</Typography>
  		<SNETTextfield 
  			slabel="Organization Name"
  			description="The organziation name is displayed to users on the AI Marketplace."
  		/>
  		<SNETTextarea 
  			label="Short Description"
  			rowCount="4"
  			colCount="102"
  			minCount="0"
  			maxCount="160"
  		/>
  		<SNETTextarea 
  			label="Long Description"
  			rowCount="8"
  			colCount="102"
  			minCount="0"
  			maxCount="5000"
  		/>
  		<SNETTextfield 
  			label="Organization Website URL"
  			description="Your organization’s website must be publicly available and the domain name must be associated with your organization."
  		/>
  	</Grid>
  )
};

export default withStyles(useStyles)(BasicDetails);
