import React from "react";
import StatusBanner from "./StatusBanner";
import { useHistory } from "react-router-dom";
import { GlobalRoutes } from "../../GlobalRouter/Routes";
import { useSelector } from "react-redux";

import orgSetupPendingImg from "shared/dist/assets/images/orgSetupPending.png";

const VerificationPending = () => {
  const { email, ownerEmail } = useSelector(state => ({
    email: state.user.email,
    ownerEmail: state.organization.owner,
  }));
  const history = useHistory();

  const handleInviteSetup = () => {
    history.push(GlobalRoutes.INVITE_MEMBERS.path);
  };

  const shouldInviteMembersBeEnabled = () => email === ownerEmail;

  return (
    <StatusBanner
      title="Your Organization entity review is in progress…"
      img={orgSetupPendingImg}
      description="This review may take a day or two.  In the meantime you can add team memebers to your organization to help you setup and manage your AI services more efficiently.   You can also view our guides and tutorials."
      actions={[
        {
          children: "Invite Team members",
          variant: "outlined",
          color: "primary",
          onClick: handleInviteSetup,
          disabled: !shouldInviteMembersBeEnabled(),
        },
        { children: "contact support", variant: "text", color: "primary" },
      ]}
      pending
    />
  );
};

export default VerificationPending;
