import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { OnboardingRoutes } from "../OnboardingRouter/Routes";
import { onboardingStatusList } from "../constant";

const Default = ({ history }) => {
  const { onboardingStatus } = useSelector(state => state.user);

  useEffect(() => {
    switch (onboardingStatus) {
      case onboardingStatusList.NOT_STARTED:
        return history.push(OnboardingRoutes.SINGULARITY_ACCOUNT.path);
      case onboardingStatusList.SELECTED_ENTITY:
        return history.push(OnboardingRoutes.ACCEPT_SERVICE_AGREEMENT.path);
      case onboardingStatusList.ACCEPTED_AGREEMENT:
        return history.push(OnboardingRoutes.AUTHENTICATE_ID.path);
      default:
        return history.push(OnboardingRoutes.SINGULARITY_ACCOUNT.path);
    }
  }, [history, onboardingStatus]);

  return <div />;
};

export default Default;
