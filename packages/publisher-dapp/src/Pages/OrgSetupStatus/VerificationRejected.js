import React from "react";
import SNETStatusBanner from "shared/dist/components/SNETStatusBanner";
import { useHistory, useParams } from "react-router-dom";
import { GlobalRoutes } from "../../GlobalRouter/Routes";
import { AuthenticateRoutes } from "../Onboarding/Authenticate/AuthenitcateRouter/Routes";
import { useSelector } from "react-redux";
import { organizationSetupStatuses } from "../../Utils/organizationSetup";

const VerificationRejected = () => {
  const status = useSelector(state => state.organization.state.state);
  const history = useHistory();
  const { orgUuid } = useParams();

  const handleEditOrgDetails = () => {
    if (status === organizationSetupStatuses.ONBOARDING_REJECTED) {
      return history.push(AuthenticateRoutes.ORGANIZATION.path);
    }
    history.push(GlobalRoutes.ORGANIZATION_SETUP.path.replace(":orgUuid", orgUuid));
  };

  return (
    <SNETStatusBanner
      title="Verification rejected."
      img="http://placehold.it/302x242"
      description={`You can continue finishing setting up your company details and publish your company entity to the blockchain.
                    Then you will be ready to create and publish your new AI services to the AI Marketplace. You can also invite
                team members to help setup and manage your AI services more efficiently.`}
      actions={[
        { children: "Edit Details", variant: "contained", color: "primary", onClick: handleEditOrgDetails },
        { children: "Invite Team Members", variant: "outlined", color: "primary", disabled: true },
      ]}
    />
  );
};

export default VerificationRejected;
