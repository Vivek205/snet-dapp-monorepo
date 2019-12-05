import React from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { withStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/CheckCircle";

import { useStyles } from "./styles";
import StyledButton from "shared/dist/components/StyledButton";
import GetInTouch from "./GetInTouch";
import { FromCodeToCustomerList, KeyFeaturesList, ProgramMemberShipDetailsList } from "./content";

const Overview = ({ classes }) => {
  return (
  	<Grid container className={classes.overiewMainContainer}>
  		<Grid item xs={12} sm={12} md={12} lg={12} className={classes.codeToCustomer}>
        <Grid item xs={12} sm={12} md={5} lg={5} className={classes.codeToCustomerContent}>
        	<Typography variant="h2">From Code to Customer</Typography>
        	<Typography variant="body1">Join the Singularity Dev Publisher Program to reach customers around the world on the AI Marketplace for any platform,. You’ll also get access to beta software, advanced app capabilities, extensive beta testing tools, and app analytics.</Typography>
        	<List>
        	{FromCodeToCustomerList.map((item, index) => (
      			<ListItem>
          		<ListItemIcon>
              	<CheckIcon className={classes.checkCircleIcon} />
            	</ListItemIcon>
          		<ListItemText primary={item.list} />
          </ListItem>		
        		))}
          </List>
          <StyledButton btnText="start your enroll" type="blue" />
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7}>
					<img src="http://placehold.it/736X416" alt="media" />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.features}>
      	<Grid item xs={12} sm={12} md={12} lg={5}>
					<img src="http://placehold.it/736X416" alt="media" />
        </Grid>
      	<Grid item xs={12} sm={12} md={12} lg={7} className={classes.featuresContent}>
        	<Typography variant="h2">Key Features</Typography>
        	<Typography variant="body1">Lorem ipsum dolor sit amet, ut sea homero forensibus. Ea veri indoctum nam, nec ea nulla concludaturque, graeco assentior at nam. Fugit veritus propriae sed at, in usu labores offendit. Pri veniam vivendum in, elitr latine sed te. His simul inimicus neglegentur ex, an vix praesent iracundia.</Typography>
        	<List>
           {KeyFeaturesList.map((item, index) => (
      			<ListItem>
          		<ListItemIcon>
              	<CheckIcon className={classes.checkCircleIcon} />
            	</ListItemIcon>
          		<ListItemText primary={item.list} />
          	</ListItem>		
        		))}
          </List>
          <StyledButton btnText="see how it works" type="transparentBlueBorder" />
        </Grid>        
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.programMemDetails}>
      	<div>
	      	<Typography variant="h2">Program Memberships Details</Typography>
	        <Typography variant="body1">Lorem ipsum dolor sit amet, ut sea homero forensibus. Ea veri indoctum nam, nec ea nulla concludaturque, graeco assentior at nam. Fugit veritus propriae sed at, in usu labores offendit. Pri veniam vivendum in, elitr latine sed te. His simul inimicus neglegentur ex, an vix praesent iracundia.</Typography>
	        <List>
	        	{ProgramMemberShipDetailsList.map((item, index) => (
      			<ListItem>
          		<ListItemIcon>
              	<CheckIcon className={classes.checkCircleIcon} />
            	</ListItemIcon>
          		<ListItemText primary={item.list} />
          </ListItem>		
        		))}
	        </List>
	        <div className={classes.btnContainer}>
	        	<StyledButton btnText="start your enroll" type="blue" />
	        </div>
	      </div>
      </Grid>
      <GetInTouch/>
  	</Grid>
  );
};

export default withStyles(useStyles)(Overview);