import React, { useState } from "react";
import SNETForgotPasswordConfirm from "shared/dist/components/SNETForgotPasswordConfirm";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../Services/Redux/actionCreators/userActions";
import { GlobalRoutes } from "../../GlobalRouter/Routes";

const ForgotPasswordConfirm = ({ history }) => {
  const [error, setError] = useState(undefined);
  const email = useSelector(state => state.user.email);
  const dispatch = useDispatch();
  const handleSubmit = async (localEmail, code, password) => {
    try {
      await dispatch(loginActions.forgotPasswordSubmit(localEmail, code, password));
      history.push(GlobalRoutes.LOGIN.path);
    } catch (e) {
      setError("Something went wrong. Please try later");
    }
  };

  return <SNETForgotPasswordConfirm forgotPasswordConfirmError={error} onSubmit={handleSubmit} email={email} />;
};

export default ForgotPasswordConfirm;
