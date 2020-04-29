import React from "react";
import { useSelector } from "react-redux";
import VerificationFailed from "shared/dist/assets/images/VerificationFailed.png";
import SNETStatusBanner, { statusTitleType } from "shared/dist/components/SNETStatusBanner";

const selectState = state => ({ rejectReason: state.organization.rejectReason });

const VerificationRejected = () => {
  const { rejectReason } = useSelector(selectState);

  return (
    <SNETStatusBanner
      title="Your organization was rejected."
      img={VerificationFailed}
      description={
        <span>
          Unfortunatetly your organization is rejected during the internal verification. Please check your inbox for
          mail from singularitynet team with detailed explanation for your rejection. You can reinitiate the
          organization creation once all criteria is met.
          <br />
          <br />
          <strong>Comments:</strong> {rejectReason}.
          <br />
        </span>
      }
      actions={[
        {
          children: "contact support",
          variant: "outlined",
          color: "primary",
          href: `mailto:${process.env.REACT_APP_SNET_SUPPORT_MAIL}`,
          target: "_blank",
          rel: "noreferrer noopener",
        },
      ]}
      type={statusTitleType.REJECTED}
    />
  );
};

export default VerificationRejected;
