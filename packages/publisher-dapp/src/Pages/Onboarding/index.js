import React, { useState, Fragment } from "react";
import { titles, descriptions, progressText, stepsToKeys, steps, stepsLimit, keysToSteps } from "./constant";
import ProgressBar from "shared/dist/components/ProgressBar";
import { withStyles } from "@material-ui/core/styles";

import Entity from "./Entity";
import TNC from "./TNC";
import Authenticate from "./Authenticate";
import { useStyles } from "./styles";
import Navigation from "./Navigation";

const Onboarding = ({ match, classes }) => {
  const [currentStep, setCurrentStep] = useState(steps.ENTITY);

  const onboardingSections = {
    ENTITY: { title: titles.ENTITY, description: descriptions.ENTITY, component: <Entity /> },
    TNC: { title: titles.TNC, description: descriptions.TNC, component: <TNC /> },
    AUTHENTICATE: { title: titles.AUTHENTICATE, description: descriptions.AUTHENTICATE, component: <Authenticate /> },
  };

  const activeStep = onboardingSections[currentStep];

  const handleNext = () => {
    if (stepsToKeys[currentStep] === stepsLimit.LAST) {
      return undefined;
    }
    return () => {
      const nextStep = keysToSteps[stepsToKeys[currentStep] + 1];
      setCurrentStep(nextStep);
    };
  };

  const handlePrev = () => {
    if (stepsToKeys[currentStep] === stepsLimit.FIRST) {
      return undefined;
    }
    return () => {
      const nextStep = keysToSteps[stepsToKeys[currentStep] - 1];
      setCurrentStep(nextStep);
    };
  };

  return (
    <Fragment>
      <div className={classes.topSection}>
        <h2>{activeStep.title}</h2>
        <span> {activeStep.description}</span>
      </div>
      <ProgressBar activeSection={stepsToKeys[currentStep]} progressText={progressText} />
      {activeStep.component}
      <Navigation handleNext={handleNext()} handlePrev={handlePrev()} />
    </Fragment>
  );
};

export default withStyles(useStyles)(Onboarding);
