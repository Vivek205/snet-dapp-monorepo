import React from "react";
import SNETStatusBanner, { statusTitleType } from "shared/dist/components/SNETStatusBanner";
import VerificationPendingImage from "shared/dist/assets/images/VerificationPending.png";

const ReviewInProgress = ({ handleBackToDashboard }) => {
  return (
    <SNETStatusBanner
      title="Your AI service review is in progress…"
      img={VerificationPendingImage}
      description="This review may take a day or two.  After the review you will be notified if your AI service is accepted or if some inputs need to be refined."
      actions={[
        { children: "back to dashboard", variant: "outlined", color: "primary", onClick: handleBackToDashboard },
      ]}
      type={statusTitleType.PENDING}
    />
  );
};

export default ReviewInProgress;
