import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import { useStyles } from "./styles";
import ServiceCollection from "./ServiceCollection";

class MainSection extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={24} className={classes.mainSection}>
        <ServiceCollection />
      </Grid>
    );
  }
}

export default withStyles(useStyles)(MainSection);
