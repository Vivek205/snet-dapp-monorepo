import React, { Fragment } from "react";

import { GlobalRoutes } from "../GlobalRouter/Routes";
import RegistrationHeader from "../Pages/RegistrationHeader";

const withSignupRegistrationHeader = Component => {
  return props => (
    <Fragment>      
      <RegistrationHeader headerTitle="Already have an account?" headerLinkText="Login" headerLinkTo={GlobalRoutes.LOGIN.path} />
      <Component {...props} />
    </Fragment>
  );
};

export default withSignupRegistrationHeader;
