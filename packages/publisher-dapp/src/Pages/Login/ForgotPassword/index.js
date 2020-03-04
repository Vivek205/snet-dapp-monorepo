import React, { Fragment } from "react";

import SNETForgotPassword from "shared/dist/components/SNETForgotPassword";

const ForgotPassword = () => {
  const handleSubmit = () => {
    // hanlde submit function
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
