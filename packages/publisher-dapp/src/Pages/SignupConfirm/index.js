import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SNETSignupConfirm from "shared/dist/components/SNETSignupConfirm";
import { info, alertMsg } from "./content";
import { signupActions } from "../../Services/Redux/actionCreators/userActions";
import { alertTypes } from "shared/dist/components/AlertBox";

const SignupConfirm = () => {
  const [signupAlert, setSignupAlert] = useState({});
  const email = useSelector(state => state.user.email);
  const dispatch = useDispatch();

  const handleResendOTP = async () => {
    try {
      await dispatch(signupActions.resendOTP(email));
      setSignupAlert({ type: alertTypes.SUCCESS, message: alertMsg.resend_success });
    } catch (error) {
      setSignupAlert({ type: alertTypes.ERROR, message: alertMsg.resend_error });
    }
  };

  const handleSubmit = async (otp) => {
    try {
      await dispatch(signupActions.signupConfirm(email, otp))
    } catch (error) {
      
    }
    // TODO handle submit otp flow
  };

  return (
    <SNETSignupConfirm info={info} onResendOtp={handleResendOTP} onSubmit={handleSubmit} signupAlert={signupAlert} />
  );
};

export default SignupConfirm;
