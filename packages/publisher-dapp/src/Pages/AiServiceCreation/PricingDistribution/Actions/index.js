import React from "react";

import { useStyles } from "./styles";
import SNETButton from "shared/dist/components/SNETButton";

const Actions = () => {
  const classes = useStyles();

  const handleFinishLater = () => {
    // TODO handleFinishLater
  };

  const handleBack = () => {
    // TODO handleBack
  };

  const handleContinue = () => {
    // TODO handleContinue
  };

  return (
    <div className={classes.buttonsContainer}>
      <SNETButton color="primary" children="finish later" onClick={handleFinishLater} />
      <SNETButton color="primary" children="back" onClick={handleBack} />
      <SNETButton color="primary" variant="contained" children="continue" onClick={handleContinue} />
    </div>
  );
};

export default Actions;
