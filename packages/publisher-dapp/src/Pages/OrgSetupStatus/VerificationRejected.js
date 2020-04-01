import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { organizationSetupStatuses } from "../../Utils/organizationSetup";
import VerificationFailed from "shared/dist/assets/images/VerificationFailed.png";
import SNETStatusBanner, { statusTitleType } from "shared/dist/components/SNETStatusBanner";
import { orgVerificationActions } from "../../Services/Redux/actionCreators/userActions";

const selectState = state => ({
  status: state.organization.state.state,
  rejectReason: state.organization.rejectReason,
  uuid: state.organization.uuid,
});

const VerificationRejected = () => {
  const { status, uuid, rejectReason } = useSelector(selectState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === organizationSetupStatuses.ONBOARDING_REJECTED) {
      // TODO get the comment from verification API.
      dispatch(orgVerificationActions.getVerificationStatus(uuid));
    }
  }, [dispatch, status, uuid]);

  return (
    <SNETStatusBanner
      title="Your organization was rejected."
      img={VerificationFailed}
      description={`Unfortunatetly your organization is rejected during the internal verification.
      Reason: ${rejectReason}.
       Please check your inbox for mail from singularitynet team with detailed explanation for your rejection.
       You can reinitiate the organization creation once all criteria is met.`}
      actions={[{ children: "contact support", variant: "outlined", color: "primary", disabled: true }]}
      type={statusTitleType.REJECTED}
    />
  );
};

export default VerificationRejected;
