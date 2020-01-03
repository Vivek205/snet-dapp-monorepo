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
  	<Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.getInTouch}>
      	<Typography variant="h2">More Questions? Get in Touch.</Typography>
        <Typography variant="body2">Lorem ipsum dolor sit amet, ut sea homero forensibus. Ea veri indoctum nam, nec ea nulla concludaturque, graeco assentior at nam. Fugit veritus propriae sed at, in usu labores offendit. Pri veniam vivendum in, elitr latine sed te. His simul inimicus negle ge ntur ex, an vix praesent iracundia.</Typography>
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
	        <StyledButton btnText="start your enroll" type="blue" href={GlobalRoutes.ENROLL.path} />
    		</form>    		
      </Grid>
  	</Grid>
  );
};

export default withStyles(useStyles)(GetInTouch);
