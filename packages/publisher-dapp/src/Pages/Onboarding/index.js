import React, { useEffect } from "react";
import { progressText, onboardingSections } from "./constant";
import ProgressBar from "shared/dist/components/ProgressBar";
import { withStyles } from "@material-ui/core/styles";
import isEmpty from "lodash/isEmpty";
import { useSelector } from "react-redux";

import { useStyles } from "./styles";
import { OnboardingRoutes } from "./OnboardingRouter/Routes";
import OnboardingRouter from "./OnboardingRouter";
import Heading from "./Heading";
import { OrganizationSetupRoutes } from "../OrganizationSetup/OrganizationSetupRouter/Routes";

const Onboarding = ({ location, history, classes }) => {
  const { email, ownerEmail } = useSelector(state => ({
    email: state.user.email,
    ownerEmail: state.organization.owner,
  }));

  useEffect(() => {
    if (!isEmpty(email) && !isEmpty(ownerEmail) && email === ownerEmail) {
      history.push(OrganizationSetupRoutes.DEFAULT_PAGE.path);
    }
  });

  const activeSection = () => {
    const { pathname: path } = location;
    const { SINGULARITY_ACCOUNT, ACCEPT_SERVICE_AGREEMENT, AUTHENTICATE_ID } = onboardingSections;

    if (path.includes(OnboardingRoutes.SINGULARITY_ACCOUNT.path)) {
      return SINGULARITY_ACCOUNT;
    } else if (path.includes(OnboardingRoutes.ACCEPT_SERVICE_AGREEMENT.path)) {
      return ACCEPT_SERVICE_AGREEMENT;
    } else if (path.includes(OnboardingRoutes.AUTHENTICATE_ID.path)) {
      return AUTHENTICATE_ID;
    }
    return SINGULARITY_ACCOUNT;
  };

  return (
    <div className={classes.onboardingContainer}>
      <Heading {...activeSection().heading} />
      <ProgressBar activeSection={activeSection().key} progressText={progressText} />
      <OnboardingRouter />
    </div>
  );
};

export default withStyles(useStyles)(Onboarding);
