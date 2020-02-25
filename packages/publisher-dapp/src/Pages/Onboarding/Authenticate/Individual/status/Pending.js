import React from "react";
import SNETStatusBanner, { statusTitleType } from "shared/dist/components/SNETStatusBanner";
import { useHistory } from "react-router-dom";
import { GlobalRoutes } from "../../../../../GlobalRouter/Routes";
import { useSelector } from "react-redux";

import orgSetupPendingImg from "shared/dist/assets/images/orgSetupPending.png";

const Pending = () => {
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
    <SNETStatusBanner
      title="Your Jumio ID verificatoion is in progress…"
      img={orgSetupPendingImg}
      description="This review may take a few minutes to complete. In the meantime you can add team memebers to your organization to help you setup and manage your AI services more efficiently."
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
      type={statusTitleType.PENDING}
    />
  );
};

export default Pending;
