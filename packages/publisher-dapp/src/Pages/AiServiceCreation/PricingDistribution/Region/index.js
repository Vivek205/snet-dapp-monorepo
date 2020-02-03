import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";

const Region = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.grayBox}>
        Region
      </Grid>
    </div>
  );
};

export default Region;
