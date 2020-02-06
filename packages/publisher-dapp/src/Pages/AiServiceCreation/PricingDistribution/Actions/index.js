import React from "react";
import { useHistory } from "react-router-dom";

import { useStyles } from "./styles";
import SNETButton from "shared/dist/components/SNETButton";
import { ServiceCreationRoutes } from "../../ServiceCreationRouter/Routes";

const Actions = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleFinishLater = () => {
    // TODO handleFinishLater
  };

  const handleBack = () => {
    // TODO handleBack
  };

  const handleContinue = () => {
    history.push(ServiceCreationRoutes.SUBMIT.path);
    // TODO handleContinue
  };

  return (
    <div className={classes.buttonsContainer}>
      <SNETButton color="primary" children="finish later" onClick={handleFinishLater} />
      <SNETButton color="primary" children="prvious step" onClick={handleBack} />
      <SNETButton color="primary" variant="contained" children="continue" onClick={handleContinue} />
    </div>
  );
};

export default Actions;
