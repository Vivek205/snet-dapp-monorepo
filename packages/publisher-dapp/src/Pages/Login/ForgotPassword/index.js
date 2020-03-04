import React, { Fragment } from "react";

import { GlobalRoutes } from "../../../GlobalRouter/Routes";

import SNETForgotPassword from "shared/dist/components/SNETForgotPassword";

const ForgotPassword = ({ history }) => {
  const handleSubmit = () => {
    history.push(GlobalRoutes.LOGIN.path);
  };

  return (
    <Fragment>
      <SNETForgotPassword
        title="Forgot your Password?"
        // email={email}
        forgotPasswordError="error"
        onSubmit={handleSubmit}
      />
    </Fragment>
  );
};

export default ForgotPassword;
