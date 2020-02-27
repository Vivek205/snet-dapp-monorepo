import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { OrganizationSetupRoutes } from "../OrganizationSetupRouter/Routes";

const selectState = state => ({
  onboardingStatus: state.user.onboardingStatus,
  orgUuid: state.organization.uuid,
});
const Default = ({ history }) => {
  const { onboardingStatus, orgUuid } = useSelector(selectState);

  useEffect(() => {
    return history.push(OrganizationSetupRoutes.ORGANIZATION_PROFILE.path.replace(":orgUuid", orgUuid));
  }, [history, onboardingStatus, orgUuid]);

  return <div />;
};

export default Default;
