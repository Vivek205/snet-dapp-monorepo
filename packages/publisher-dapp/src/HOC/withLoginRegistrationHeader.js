import React, { Fragment } from "react";

import { GlobalRoutes } from "../GlobalRouter/Routes";
import RegistrationHeader from "../Pages/RegistrationHeader";

const withLoginRegistrationHeader = Component => {
  return props => (
    <Fragment>      
      <RegistrationHeader headerTitle="New to SingularityNET?" headerLinkText="Sign up" headerLinkTo={GlobalRoutes.SIGNUP.path} />
      <Component {...props} />
    </Fragment>
  );
};

export default withLoginRegistrationHeader;
