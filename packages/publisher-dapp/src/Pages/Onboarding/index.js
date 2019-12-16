import React, { useState, Fragment, useEffect } from "react";
import {
  // titles,
  // descriptions,
  progressText,
  // stepsToKeys,
  steps,
  // stepsLimit,
  // keysToSteps,
  onboardingSections,
} from "./constant";
import ProgressBar from "shared/dist/components/ProgressBar";
import { withStyles } from "@material-ui/core/styles";

// import Entity from "./Entity";
// import TNC from "./TNC";
// import Authenticate from "./Authenticate";
import { useStyles } from "./styles";
// import Navigation from "./Navigation";
import { OnboardingRoutes } from "./OnboardingRouter/Routes";
import OnboardingRouter from "./OnboardingRouter";
import Heading from "./Heading";

const Onboarding = ({ match, classes, history, location }) => {
  // const [currentStep, setCurrentStep] = useState(steps.ENTITY);

  // useEffect(() => {
  //   setCurrentStep();
  // }, []);

  // const onboardingSections = {
  //   ENTITY: {
  //     title: titles.ENTITY,
  //     description: descriptions.ENTITY,
  //     component: <Entity />,
  //     path: OnboardingRoutes.ENTITY.path,
  //   },
  //   TNC: {
  //     title: titles.TNC,
  //     description: descriptions.TNC,
  //     component: <TNC />,
  //     path: OnboardingRoutes.TNC.path,
  //   },
  //   AUTHENTICATE: {
  //     title: titles.AUTHENTICATE,
  //     description: descriptions.AUTHENTICATE,
  //     component: <Authenticate />,
  //     path: OnboardingRoutes.AUTHENTICATE.path,
  //   },
  // };

  // const activeStep = onboardingSections[currentStep];

  // const handleNext = () => {
  //   if (stepsToKeys[currentStep] === stepsLimit.LAST) {
  //     return undefined;
  //   }
  //   return () => {
  //     const nextStep = keysToSteps[stepsToKeys[currentStep] + 1];
  //     history.push(onboardingSections[nextStep].path);
  //     setCurrentStep(nextStep);
  //   };
  // };

  // const handlePrev = () => {
  //   if (stepsToKeys[currentStep] === stepsLimit.FIRST) {
  //     return undefined;
  //   }
  //   return () => {
  //     const prevStep = keysToSteps[stepsToKeys[currentStep] - 1];
  //     history.push(onboardingSections[prevStep].path);
  //     setCurrentStep(prevStep);
  //   };
  // };

  const activeSection = () => {
    const { pathname: path } = location;
    // stepsToKeys[currentStep]

    const strippedPath = path => path.split("/")[2];

    const { ENTITY, TNC, AUTHENTICATE } = onboardingSections;

    switch (strippedPath(path)) {
      case strippedPath(OnboardingRoutes.ENTITY.path): {
        return ENTITY;
      }
      case strippedPath(OnboardingRoutes.TNC.path): {
        return TNC;
      }
      case strippedPath(OnboardingRoutes.AUTHENTICATE.path): {
        return AUTHENTICATE;
      }
      default: {
        return ENTITY;
      }
    }
  };

  return (
    <Fragment>
      <Heading {...activeSection().heading} />
      <ProgressBar activeSection={activeSection()} progressText={progressText} />
      <OnboardingRouter />
      {/* <Navigation handleNext={handleNext()} handlePrev={handlePrev()} /> */}
    </Fragment>
  );
};

export default withStyles(useStyles)(Onboarding);
