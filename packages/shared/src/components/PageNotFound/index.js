import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

import StyledButton from "shared/dist/components/StyledButton";
import { PageNotFoundImage } from "../../assets/images/pageNotFound.png";
import { useStyles } from "./styles";

const PageNotFound = ({ classes }) => {
  return (
  	<Grid container className={classes.pageNotFoundContainer}>
  		<Grid item xs={12} sm={12} md={12} lg={12} className={classes.mediaContentContainer}>
  			<Grid item xs={12} sm={12} md={6} lg={6} className={classes.mediaContiner}>
  				<img src={PageNotFoundImage} title="Page Not Found" />
  			</Grid>
  			<Grid item xs={12} sm={12} md={6} lg={6} className={classes.contentContainer}>
  				<Typography variant="h3">Page not found!</Typography>
  				<Typography>The page that you are trying to access is moved, currently down or never existed. Please check the URL.</Typography>
  				<StyledButton type="transparentBlueBorder" btnText="go to home" />
  			</Grid>
  		</Grid>
  		<Grid item xs={12} sm={12} md={12} lg={12} className={classes.description}>
  			<Typography>If you are seeing this message repeatedly, let us know at <a href="/" alt="support singularity">support@singularitynet.io</a> and we will look into it.</Typography>
  		</Grid>
  	</Grid>
  )
};

export default withStyles(useStyles)(PageNotFound);
