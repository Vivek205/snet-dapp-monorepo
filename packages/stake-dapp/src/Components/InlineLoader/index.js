import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyles } from "./styles";

const InlineLoader = () => {
  const classes = useStyles();

  return (
    <div className={classes.circularProgressContainer}>
      <div className={classes.loaderChild}>
        <CircularProgress className={classes.circularProgress} />
        <p className={classes.loaderText}>LOADING STAKES..</p>
      </div>
    </div>
  );
};

export default InlineLoader;
