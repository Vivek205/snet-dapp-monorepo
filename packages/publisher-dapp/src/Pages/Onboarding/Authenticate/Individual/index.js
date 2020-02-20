import React from "react";
import { useDispatch } from "react-redux";

import SNETButton from "shared/dist/components/SNETButton";
import { individualVerificationActions } from "../../../../Services/Redux/actionCreators/userActions";

const Individual = () => {
  const dispatch = useDispatch();

  const handleVerify = async () => {
    const { redirectUrl } = await dispatch(individualVerificationActions.initiateVerificationAPI());
    await window.location.replace(redirectUrl);
  };
  return (
    <div>
      Individual
      <SNETButton onClick={handleVerify}>Verify via Jumio</SNETButton>
    </div>
  );
};

export default Individual;
