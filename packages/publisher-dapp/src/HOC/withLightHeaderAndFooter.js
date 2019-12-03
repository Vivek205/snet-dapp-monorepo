import React, { Fragment } from "react";
import Footer from "shared/dist/components/Footer";

const withLightHeaderAndFooter = ({ children }) => {
  return (
    <Fragment>
      <header>Light Header</header>
      {children}
      <Footer />
    </Fragment>
  );
};

export default withLightHeaderAndFooter;
