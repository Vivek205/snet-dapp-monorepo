import React, { Fragment } from "react";

const withLightHeader = ({ children }) => {
  return (
    <Fragment>
      <header>Light Header</header>
      {children}
    </Fragment>
  );
};

export default withLightHeader;
