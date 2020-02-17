import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import { useStyles } from "./styles";

const Overview = ({ classes }) => {
  return (
    <Grid container className={classes.overiewMainContainer}>
      <p>
        <h1>Overview content place holder.....</h1>
      </p>
      <p>
        <h2>Overview content place holder.....</h2>
      </p>
      <p>
        <h3>Overview content place holder.....</h3>
      </p>
      <p>
        <h4>Overview content place holder.....</h4>
      </p>
      <p>
        <h5>Overview content place holder.....</h5>
      </p>
    </Grid>
  );
};

export default withStyles(useStyles)(Overview);
