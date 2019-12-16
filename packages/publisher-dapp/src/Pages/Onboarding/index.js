import React, { useState, Fragment, useEffect } from "react";
import { titles, descriptions, progressText, stepsToKeys, steps, stepsLimit, keysToSteps } from "./constant";
import ProgressBar from "shared/dist/components/ProgressBar";
import { withStyles } from "@material-ui/core/styles";

import Entity from "./Entity";
import TNC from "./TNC";
import Authenticate from "./Authenticate";
import { useStyles } from "./styles";
import Navigation from "./Navigation";
import { OnboardingRoutes } from "./OnboardingRouter/Routes";
import OnboardingRouter from "./OnboardingRouter";

const Onboarding = ({ match, classes, history }) => {
  const [currentStep, setCurrentStep] = useState(steps.ENTITY);

  useEffect(() => {
    const { step } = match.params;
    if (!step) {
      return;
    }
    setCurrentStep(step.toUpperCase());
  }, [match]);

  const onboardingSections = {
    ENTITY: {
      title: titles.ENTITY,
      description: descriptions.ENTITY,
      component: <Entity />,
      path: OnboardingRoutes.ENTITY.path,
    },
    TNC: {
      title: titles.TNC,
      description: descriptions.TNC,
      component: <TNC />,
      path: OnboardingRoutes.TNC.path,
    },
    AUTHENTICATE: {
      title: titles.AUTHENTICATE,
      description: descriptions.AUTHENTICATE,
      component: <Authenticate />,
      path: OnboardingRoutes.AUTHENTICATE.path,
    },
  };

  const activeStep = onboardingSections[currentStep];

  const handleNext = () => {
    if (stepsToKeys[currentStep] === stepsLimit.LAST) {
      return undefined;
    }
    return () => {
      const nextStep = keysToSteps[stepsToKeys[currentStep] + 1];
      history.push(onboardingSections[nextStep].path);
      setCurrentStep(nextStep);
    };
  };

  const handlePrev = () => {
    if (stepsToKeys[currentStep] === stepsLimit.FIRST) {
      return undefined;
    }
    return () => {
      const prevStep = keysToSteps[stepsToKeys[currentStep] - 1];
      history.push(onboardingSections[prevStep].path);
      setCurrentStep(prevStep);
    };
  };

  return (
    <Fragment>
      <div className={classes.topSection}>
        <h2>{activeStep.title}</h2>
        <span> {activeStep.description}</span>
      </div>
      <ProgressBar activeSection={stepsToKeys[currentStep]} progressText={progressText} />
      <OnboardingRouter handleNext={handleNext()} handlePrev={handlePrev()} />
      <Navigation handleNext={handleNext()} handlePrev={handlePrev()} />
    </Fragment>
  );
};

export default withStyles(useStyles)(Onboarding);
