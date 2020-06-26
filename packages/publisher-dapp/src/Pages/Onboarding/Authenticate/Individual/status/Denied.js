import React from "react";

import SNETStatusBanner, { statusTitleType } from "shared/dist/components/SNETStatusBanner";
import orgSetupApprovedImg from "shared/dist/assets/images/VerificationFailed.png";

const Denied = ({ handleVerify, rejectReason }) => {
  return (
    <SNETStatusBanner
      title="Your Jumio Id verification was unsuccessfull."
      img={orgSetupApprovedImg}
      description={`Reason for rejection: ${rejectReason} .Please prepare the required documents and redo the Jumio ID verification. 
      If you believe there was error by Jumio or by SingularityNet, please contact our support staff to assist you. `}
      actions={[
        { children: "retry", variant: "contained", color: "primary", onClick: handleVerify },
        { children: "contact support", variant: "outlined", color: "primary" },
      ]}
      type={statusTitleType.REJECTED}
    />
  );
};

export default Denied;
