import React, { Fragment } from "react";
import Footer from "shared/dist/components/Footer";

import Header from "../Components/Header";

const withLightHeaderAndFooter = Component => {
  return props => (
    <Fragment>
      <Header />
      <Component {...props} />
      <Footer />
    </Fragment>
  );
};

export default withLightHeaderAndFooter;
