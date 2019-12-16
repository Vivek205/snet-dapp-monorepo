import React, { Fragment } from "react";
import { progressText, onboardingSections } from "./constant";
import ProgressBar from "shared/dist/components/ProgressBar";
import { withStyles } from "@material-ui/core/styles";

import { useStyles } from "./styles";
import { OnboardingRoutes } from "./OnboardingRouter/Routes";
import OnboardingRouter from "./OnboardingRouter";
import Heading from "./Heading";

const Onboarding = ({ location }) => {
  const activeSection = () => {
    const { pathname: path } = location;
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
    </Fragment>
  );
};

export default withStyles(useStyles)(Onboarding);
