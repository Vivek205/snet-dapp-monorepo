import React, { Fragment } from "react";

import RegistrationHeader from "../Pages/RegistrationHeader";

const withRegistrationHeader = (Component, title, linkText, linkTo) => {
  return props => (
    <Fragment>
      <RegistrationHeader headerTitle={title} headerLinkText={linkText} headerLinkTo={linkTo} />
      <Component {...props} />
    </Fragment>
  );
};

export default withRegistrationHeader;
