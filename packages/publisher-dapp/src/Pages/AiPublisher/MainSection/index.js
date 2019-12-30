import React, { Component } from "react";
import Grid from '@material-ui/core/Grid'
import { withStyles } from "@material-ui/core/styles";

import { useStyles } from "./styles";
import ServiceCollection from "./ServiceCollection";

class MainSection extends Component {
  render() {
  	const { classes } = this.props;
    return (
    	<Grid container spacing={24} className={classes.mainSection}>
        <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
        <Grid item xs={12} sm={9} md={9} lg={9}>
        	<ServiceCollection />
        </Grid>
      </Grid>      
    );
  }
}


export default withStyles(useStyles)(MainSection);
