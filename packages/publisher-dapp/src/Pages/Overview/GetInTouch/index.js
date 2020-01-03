import React from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';

import { GlobalRoutes } from "../../../GlobalRouter/Routes";
import { useStyles } from "./styles";
import StyledButton from "shared/dist/components/StyledButton";

const GetInTouch = ({ classes }) => {
  return (
  	<Grid container className={classes.getInTouchContainer}>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.getInTouch}>
      	<Typography variant="h2">More Questions? Get in Touch.</Typography>
        <Typography variant="body2">We can help you tackle demanding challenges, whether you’re a developer, business manager, or marketer. Our tools work together so that you and your team can improve your AI service performances while gaining valuable user insights.  Connect with us so we can assist you with the most optimal solutions.</Typography>
      	<form>
	        <TextField
	          id="outlined-number"
	          label="Email"
	          type="text"
	          InputLabelProps={{
	            shrink: true,
	          }}
	          margin="normal"
	          variant="outlined"
	        />
	        <StyledButton btnText="get in touch" type="blue" href={GlobalRoutes.ENROLL.path} />
    		</form>    		
      </Grid>
  	</Grid>
  );
};

export default withStyles(useStyles)(GetInTouch);
