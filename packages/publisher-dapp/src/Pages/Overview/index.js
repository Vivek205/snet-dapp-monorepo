import React from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { withStyles } from "@material-ui/styles";
import TextField from '@material-ui/core/TextField';
import CheckIcon from "@material-ui/icons/CheckCircle";

import { useStyles } from "./styles";
import StyledButton from "shared/dist/components/StyledButton";

const Overview = ({ classes }) => {
  return (
  	<Grid container className={classes.overiewMainContainer}>
  		<Grid item xs={12} sm={12} md={12} lg={12} className={classes.codeToCustomer}>
        <Grid item xs={5} className={classes.codeToCustomerContent}>
        	<Typography variant="h2">From Code to Customer</Typography>
        	<Typography variant="body1">Join the Singularity Dev Publisher Program to reach customers around the world on the AI Marketplace for any platform,. You’ll also get access to beta software, advanced app capabilities, extensive beta testing tools, and app analytics.</Typography>
        	<List>
            <ListItem>
            	<ListItemIcon>
                <CheckIcon className={classes.checkCircleIcon} />
              </ListItemIcon>
            	<ListItemText primary="Publish and manage your AI services to AI Marketplace" />
            </ListItem>
            <ListItem>
            	<ListItemIcon>
                <CheckIcon className={classes.checkCircleIcon} />
              </ListItemIcon>
            	<ListItemText primary="Get Analytics about usage of your AI service" />
           	</ListItem>
           	<ListItem>
           		<ListItemIcon>
                <CheckIcon className={classes.checkCircleIcon} />
              </ListItemIcon>
            	<ListItemText primary="Request and provide incensitives for new AI services to be built by the community of  AI developers." />
            </ListItem>
            <ListItem>
            	<ListItemIcon>
                <CheckIcon className={classes.checkCircleIcon} />
              </ListItemIcon>
            	<ListItemText primary="Easily deploy and integrate your AI service to mulitple platforms and languages " />
            </ListItem>
          </List>
          <StyledButton btnText="start your enroll" btnType="blue" />
        </Grid>
        <Grid item xs={7} className={classes.codeToCustomerMedia}>
					<img src="http://placehold.it/736X416" alt="media" />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.features}>
      	<Grid item xs={7} className={classes.featureMedia}>
					<img src="http://placehold.it/736X416" alt="media" />
        </Grid>
      	<Grid item xs={5} className={classes.featureContent}>
        	<Typography variant="h2">Key Features</Typography>
        	<Typography variant="body1">Lorem ipsum dolor sit amet, ut sea homero forensibus. Ea veri indoctum nam, nec ea nulla concludaturque, graeco assentior at nam. Fugit veritus propriae sed at, in usu labores offendit. Pri veniam vivendum in, elitr latine sed te. His simul inimicus neglegentur ex, an vix praesent iracundia.</Typography>
        	<List>
            <ListItem>
            	<ListItemIcon>
                <CheckIcon className={classes.checkCircleIcon} />
              </ListItemIcon>
            	<ListItemText primary="A key features." />
            </ListItem>
            <ListItem>
            	<ListItemIcon>
                <CheckIcon className={classes.checkCircleIcon} />
              </ListItemIcon>
            	<ListItemText primary="Another Big Feature." />
           	</ListItem>
           	<ListItem>
           		<ListItemIcon>
                <CheckIcon className={classes.checkCircleIcon} />
              </ListItemIcon>
            	<ListItemText primary="A very very  very long feature with lot of text and information." />
            </ListItem>
            <ListItem>
            	<ListItemIcon>
                <CheckIcon className={classes.checkCircleIcon} />
              </ListItemIcon>
            	<ListItemText primary="This would be a big feature which has lot of information and very imprtant too. " />
            </ListItem>
          </List>
          <StyledButton btnText="see how it works" btnType="transparentBlueBorder" />
        </Grid>        
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.programMemDetails}>
      	<div>
	      	<Typography variant="h2">Program Memberships Details</Typography>
	        <Typography variant="body1">Lorem ipsum dolor sit amet, ut sea homero forensibus. Ea veri indoctum nam, nec ea nulla concludaturque, graeco assentior at nam. Fugit veritus propriae sed at, in usu labores offendit. Pri veniam vivendum in, elitr latine sed te. His simul inimicus neglegentur ex, an vix praesent iracundia.</Typography>
	        <List>
	        	<div className={classes.leftSideList}>
	            <ListItem>
	            	<ListItemIcon>
	                <CheckIcon className={classes.checkCircleIcon} />
	              </ListItemIcon>
	            	<ListItemText primary="AI services dashboard" />
	            </ListItem>
	            <ListItem>
	            	<ListItemIcon>
	                <CheckIcon className={classes.checkCircleIcon} />
	              </ListItemIcon>
	            	<ListItemText primary="Reminders and notifications" />
	           	</ListItem>
	           	<ListItem>
	           		<ListItemIcon>
	                <CheckIcon className={classes.checkCircleIcon} />
	              </ListItemIcon>
	            	<ListItemText primary="Transfer AGI Tokens from your perferred wallet anytime." />
	            </ListItem>
	            <ListItem>
	            	<ListItemIcon>
	                <CheckIcon className={classes.checkCircleIcon} />
	              </ListItemIcon>
	            	<ListItemText primary="Integrate AI services using your perferred language such as Python, Java, C++, and many more" />
	            </ListItem>
						</div>
						<div className={classes.rightSideList}>
	            <ListItem>
	            	<ListItemIcon>
	                <CheckIcon className={classes.checkCircleIcon} />
	              </ListItemIcon>
	            	<ListItemText primary="Integrate AI services using your perferred language such as Python, Java, C++, and many more" />
	            </ListItem>
	            <ListItem>
	            	<ListItemIcon>
	                <CheckIcon className={classes.checkCircleIcon} />
	              </ListItemIcon>
	            	<ListItemText primary="Reminders and notifications" />
	           	</ListItem>
	           	<ListItem>
	           		<ListItemIcon>
	                <CheckIcon className={classes.checkCircleIcon} />
	              </ListItemIcon>
	            	<ListItemText primary="Transfer AGI Tokens from your perferred wallet anytime." />
	            </ListItem>
	            <ListItem>
	            	<ListItemIcon>
	                <CheckIcon className={classes.checkCircleIcon} />
	              </ListItemIcon>
	            	<ListItemText primary="AI services dashboard" />
	            </ListItem>
						</div>
	        </List>
	        <StyledButton btnText="start your enroll" btnType="blue" />
	      </div>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.getInTouch}>
      	<Typography variant="h2">More Questions? Get in Touch.</Typography>
        <Typography variant="body1">Lorem ipsum dolor sit amet, ut sea homero forensibus. Ea veri indoctum nam, nec ea nulla concludaturque, graeco assentior at nam. Fugit veritus propriae sed at, in usu labores offendit. Pri veniam vivendum in, elitr latine sed te. His simul inimicus negle ge ntur ex, an vix praesent iracundia.</Typography>
      	<form>
	        <TextField
	          id="outlined-number"
	          label="Email"
	          type="text"
	          className={classes.textField}
	          InputLabelProps={{
	            shrink: true,
	          }}
	          margin="normal"
	          variant="outlined"
	        />
    		</form>
    		<StyledButton btnText="start your enroll" btnType="blue" />
      </Grid>
  	</Grid>
  );
};

export default withStyles(useStyles)(Overview);