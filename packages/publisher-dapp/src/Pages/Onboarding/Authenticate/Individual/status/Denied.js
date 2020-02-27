import React from "react";
import SNETStatusBanner, { statusTitleType } from "shared/dist/components/SNETStatusBanner";

const Denied = () => {
  return (
    <SNETStatusBanner
      title="Your Jumio Id verification was unsuccessfull."
      img="http://placehold.it/302x242"
      description="Please prepare the required documents and redo the Jumio ID verification.  If you believe there was error by Jumio or by SingularityNet, please contact our support staff to assist you.  "
      actions={[
        { children: "access jumio verification", variant: "contained", color: "primary" },
        { children: "contact support", variant: "outlined", color: "primary" },
      ]}
      type={statusTitleType.REJECTED}
    />
  );
};

export default Denied;
