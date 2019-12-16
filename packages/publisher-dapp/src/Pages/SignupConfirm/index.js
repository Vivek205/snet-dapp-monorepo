import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SNETSignupConfirm from "shared/dist/components/SNETSignupConfirm";
import { info } from "./content";
import { signupActions } from "../../Services/Redux/actionCreators/userActions";

const SignupConfirm = () => {
  const [signupAlert, setSignupAlert] = useState({});
  const email = useSelector(state => state.user.email);
  const dispatch = useDispatch();

  const handleResendOTP = async () => {
    await dispatch(signupActions.resendOTP(email));
    // TODO handle resend OTP flow
  };

  const handleSubmit = () => {
    // TODO handle submit otp flow
  };

  return (
    <SNETSignupConfirm
      info={info}
      onResendOtp={handleResendOTP}
      onSubmit={handleSubmit}
      sing
      // TODO signupError = pass error message
    />
  );
};

export default SignupConfirm;
