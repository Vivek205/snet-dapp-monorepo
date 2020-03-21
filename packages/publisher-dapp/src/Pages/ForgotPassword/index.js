import React, { Fragment, useState } from "react";

import { GlobalRoutes } from "../../GlobalRouter/Routes";

import SNETForgotPassword from "shared/dist/components/SNETForgotPassword";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../Services/Redux/actionCreators/userActions";

const ForgotPassword = ({ history }) => {
  const [error, setError] = useState(undefined);
  const email = useSelector(state => state.user.email);
  const dispatch = useDispatch();
  const handleSubmit = async localEmail => {
    try {
      setError(undefined);
      await dispatch(loginActions.forgotPassword(localEmail));
      history.push(GlobalRoutes.FORGOT_PASSWORD_CONFIRM.path);
    } catch (e) {
      setError("Something went wrong. Please try later");
    }
  };

  return (
    <Fragment>
      <SNETForgotPassword
        title="Forgot your Password?"
        forgotPasswordError={error}
        onSubmit={handleSubmit}
        email={email}
      />
    </Fragment>
  );
};

export default ForgotPassword;
