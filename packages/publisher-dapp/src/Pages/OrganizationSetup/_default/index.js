import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { OrganizationSetupRoutes } from "../OrganizationSetupRouter/Routes";

const Default = ({ history }) => {
  const { onboardingStatus } = useSelector(state => state.user);

  useEffect(() => {
    return history.push(OrganizationSetupRoutes.ORGANIZATION_PROFILE.path);
  }, [history, onboardingStatus]);

  return <div />;
};

export default Default;
