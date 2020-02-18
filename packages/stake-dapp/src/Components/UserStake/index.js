import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles";

const UserStake = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography> coming soon ...</Typography>{" "}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserStake;
