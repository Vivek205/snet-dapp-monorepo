import React, { Fragment } from "react";
import Footer from "shared/dist/components/Footer";

const withLightHeaderAndFooter = Component => {
  return props => (
    <Fragment>
      <header>Light Header</header>
      <Component {...props} />
      <Footer />
    </Fragment>
  );
};

export default withLightHeaderAndFooter;
