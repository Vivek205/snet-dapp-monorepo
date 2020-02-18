import React from "react";

import Grid from "@material-ui/core/Grid";

import SessionTime from "./SessionTime";
import AccountBalance from "../AccountBalance";
import StackSession from "./StackSession";

const CreateStake = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <SessionTime />
        <AccountBalance />
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={8}>
        <StackSession />
      </Grid>
    </Grid>
  );
};

export default CreateStake;
