import React from "react";
import StatusBanner from "./StatusBanner";
import { useHistory } from "react-router-dom";
import { GlobalRoutes } from "../../GlobalRouter/Routes";

const VerificationApproved = () => {
  const history = useHistory();

  const handleOrgSetup = () => {
    history.push(GlobalRoutes.ORGANIZATION_SETUP.path);
  };

  return (
    <StatusBanner
      title="Verification is approved."
      img="http://placehold.it/302x242"
      description={`You can continue finishing setting up your company details and publish your company entity to the blockchain.
                    Then you will be ready to create and publish your new AI services to the AI Marketplace. You can also invite
                team members to help setup and manage your AI services more efficiently.`}
      actions={[
        { children: "organization setup", variant: "contained", color: "primary", onClick: handleOrgSetup },
        { children: "Invite Team Members", variant: "outlined", color: "primary", disabled: true },
      ]}
    />
  );
};

export default VerificationApproved;
