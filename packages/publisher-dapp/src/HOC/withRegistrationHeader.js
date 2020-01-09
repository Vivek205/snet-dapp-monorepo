import React, { Fragment } from "react";

import { GlobalRoutes } from "../GlobalRouter/Routes";
import RegistrationHeader from "../Pages/RegistrationHeader";

const withRegistrationHeader = ({ Component, title, linkText }) => {
  return props => (
    <Fragment>      
      <RegistrationHeader headerTitle={title} headerLinkText={linkText} headerLinkTo={GlobalRoutes.SIGNUP.path} />
      <Component {...props} />
    </Fragment>
  );
};

export default withRegistrationHeader;
