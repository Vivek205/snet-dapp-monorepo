import React from "react";
import { useStyles } from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingAiServices = () => {
  const classes = useStyles();
  return (
    <div className={classes.circularProgressContainer}>
      <div className={classes.loaderChild}>
        <CircularProgress className={classes.circularProgress} />
        <p className={classes.loaderText}>LOADING AI..</p>
      </div>
    </div>
  );
};

export default LoadingAiServices;
