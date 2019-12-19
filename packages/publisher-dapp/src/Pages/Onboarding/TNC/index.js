import React from "react";
import { TermsAndConditionsDetails } from "./content";
import TermsAndConditions from "shared/dist/components/TermsAndConditions";
import { OnboardingRoutes } from "../OnboardingRouter/Routes";

const TNC = ({ history }) => {
  const handleAccept = () => {
    history.push(OnboardingRoutes.AUTHENTICATE.path);
  };

  return (
    <TermsAndConditions
      title={TermsAndConditionsDetails.title}
      formLabel={TermsAndConditionsDetails.formLabel}
      onAccept={handleAccept}
    />
  );
};

export default TNC;
