import React, { useState, Fragment, useEffect } from "react";
import { titles, descriptions, progressText, stepsToKeys, steps } from "./constant";
import ProgressBar from "shared/dist/components/ProgressBar";
import { withStyles } from "@material-ui/core/styles";

import Entity from "./Entity";
import TNC from "./TNC";
import Authenticate from "./Authenticate";
import { useStyles } from "./styles";

const Onboarding = ({ match, classes }) => {
  const [currentStep, setCurrentStep] = useState(steps.ENTITY);

  useEffect(() => {
    const { step } = match.params;
    setCurrentStep(step.toUpperCase());
  }, [match]);

  const onboardingSections = {
    ENTITY: { title: titles.ENTITY, description: descriptions.ENTITY, component: Entity },
    TNC: { title: titles.TNC, description: descriptions.TNC, component: TNC },
    AUTHENTICATE: { title: titles.AUTHENTICATE, description: descriptions.AUTHENTICATE, component: Authenticate },
  };

  const activeStep = onboardingSections[currentStep];

  return (
    <Fragment>
      <div className={classes.topSection}>
        <h2>{activeStep.title}</h2>
        <span> {activeStep.description}</span>
      </div>
      <ProgressBar activeSection={stepsToKeys[currentStep]} progressText={progressText} />
      {activeStep.component}
    </Fragment>
  );
};

export default withStyles(useStyles)(Onboarding);
