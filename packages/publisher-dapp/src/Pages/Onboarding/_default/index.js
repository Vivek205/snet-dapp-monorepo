import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { OnboardingRoutes } from "../OnboardingRouter/Routes";
import { verificationStatuses } from "../constant";

const Default = ({ history }) => {
  const { verificationStatus } = useSelector(state => state.user);

  useEffect(() => {
    switch (verificationStatus) {
      case verificationStatuses.NOT_STARTED:
        return history.push(OnboardingRoutes.ENTITY.path);
      case verificationStatuses.SELECTED_ENTITY:
        return history.push(OnboardingRoutes.TNC.path);
      case verificationStatuses.ACCEPTED_TNC:
        return history.push(OnboardingRoutes.AUTHENTICATE.path);
      default:
        return history.push(OnboardingRoutes.ENTITY.path);
    }
  }, [history, verificationStatus]);

  return <div></div>;
};

export default Default;
