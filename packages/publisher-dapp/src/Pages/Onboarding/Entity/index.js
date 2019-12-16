import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import SNETButton from "shared/src/components/SNETButton";
import { useStyles } from "./styles";

const emailPreferencesList = [
	'I’d like to get new feature annoucements and tips to help imporve my AI services',
	'I’d like to get weekly summary reports of my AI services and account acitivty.',
	'I’d like to get email notifications when users leave comments or send messages '
] 

const Entity = ({ classes }) => {
  return (
    <Grid container className={classes.entityContainer}>
       <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
       		<Typography variant="h5">Entity Type</Typography>
       		<Typography className={classes.entityDescription}>You will be able to choose publish and developed as Company Organization, Indivdual / Sole Proprietor / Single Person Business or join an existing approved entity with an invitation.  The first two options require certain amount of information to proceed. </Typography>
       </Grid>

       <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
       	<Typography variant="h5">Sign In</Typography>
       	<Grid item sx={12} sm={12} md={12} lg={12} className={classes.signInContent}>
       		<Grid item sx={12} sm={4} md={4} lg={4} className={classes.signInMedia}>
       			<img src="http://placehold.it/150x150" alt="Sign In" />
       		</Grid>
       		<Grid item sx={12} sm={8} md={8} lg={8} className={classes.signInRightContent}>
       			<Typography className={classes.signInSubtitle}>Please Login or Signup into Singularitynet to use the portal.</Typography>
       			<Typography className={classes.signInDescription}>To use the portal, please sign up. Lorem ipsum dolor sit amet, per odio adipi scing ea, est an purto libris fastidii, dolor laboramus consectetuer ut eum. An debet expetendis scriptorem ius. Dolorem detracto accusamus mea cu. Nam hendrerit theophrastus ex, vix aeque solet cu.</Typography>
       			<div className={classes.signInBtns}>
       				<SNETButton color="transparent" children="Login to singularitynet" />
       				<SNETButton color="transparent" children="Create new account" />
       			</div>
       		</Grid>
       	</Grid>
       </Grid>

       <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
       	<Typography variant="h5">Email Preferences</Typography>
       	<div className={classes.checkboxContainer}>
	       	{emailPreferencesList.map((item, index) => (
	       		<FormControlLabel
			        control={
			          <Checkbox
			            value={item}
			            color="primary"
			          />
			        }
			        label={item}
			      />
	       	))}      
	      </div> 	 
       </Grid>
       <Grid item sx={12} sm={12} md={12} lg={12} className={classes.btnContainer}>
       	<SNETButton color="transparentBlueBorder" children="cancel" variant="contained" />
       	<SNETButton color="transparent" children="continue" variant="contained" />
       </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(Entity);