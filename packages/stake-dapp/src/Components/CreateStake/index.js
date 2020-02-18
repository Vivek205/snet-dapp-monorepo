import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import SessionTime from "./SessionTime";
import AccountBalance from "../AccountBalance";

const CreateStake = () => {
  return (
    <Grid container>
      <Grid item xs={4} sm={4} md={4} lg={4}>
        <SessionTime />
        <AccountBalance />
      </Grid>
      <Grid item xs={8} sm={8} md={8} lg={8}>
        <Typography variant="h4">Stake Session Coming Soon...</Typography>
      </Grid>
    </Grid>
  );
};

export default CreateStake;
