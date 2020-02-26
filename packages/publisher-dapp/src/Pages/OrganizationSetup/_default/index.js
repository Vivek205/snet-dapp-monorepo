import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { OrganizationSetupRoutes } from "../OrganizationSetupRouter/Routes";

const Default = ({ history }) => {
  const { onboardingStatus } = useSelector(state => state.user);
  const { orgUuid } = useParams();

  useEffect(() => {
    return history.push(OrganizationSetupRoutes.ORGANIZATION_PROFILE.path.replace("orgUuid", orgUuid));
  }, [history, onboardingStatus, orgUuid]);

  return <div />;
};

export default Default;
