import React, { Fragment } from "react";

import TncHeader from "../Components/TncHeader";

const withTncHeader = (Component, title, linkText, linkTo) => {
  return props => (
    <Fragment>
      <TncHeader headerTitle={title} headerLinkText={linkText} headerLinkTo={linkTo} />
      <Component {...props} />
    </Fragment>
  );
};

export default withTncHeader;
