import React, { Fragment } from "react";
import { progressText, onboardingSections } from "./constant";
import ProgressBar from "shared/dist/components/ProgressBar";
import { withStyles } from "@material-ui/core/styles";

import { useStyles } from "./styles";
import { OnboardingRoutes } from "./OnboardingRouter/Routes";
import OnboardingRouter from "./OnboardingRouter";
import Heading from "./Heading";

const Onboarding = ({ location, history }) => {
  const noPathsMatchesSubroutes = () => {
    history.push(OnboardingRoutes.ENTITY.path);
  };

  const activeSection = () => {
    const { pathname: path } = location;
    const { ENTITY, TNC, AUTHENTICATE } = onboardingSections;

    if (path.includes(OnboardingRoutes.ENTITY.path)) {
      return ENTITY;
    } else if (path.includes(OnboardingRoutes.TNC.path)) {
      return TNC;
    } else if (path.includes(OnboardingRoutes.AUTHENTICATE.path)) {
      return AUTHENTICATE;
    }
    noPathsMatchesSubroutes();
    return ENTITY;
  };

  return (
    <Fragment>
      <Heading {...activeSection().heading} />
      <ProgressBar activeSection={activeSection().key} progressText={progressText} />
      <OnboardingRouter />
    </Fragment>
  );
};

export default withStyles(useStyles)(Onboarding);
