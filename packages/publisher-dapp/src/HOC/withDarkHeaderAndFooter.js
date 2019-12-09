import React from "react";
import Footer from "shared/dist/components/Footer";

import Header from "../Components/Header";

const withDarkHeaderAndFooter = Component => {
  return props => (
    <div>
      <Header />
      <Component {...props} />
      <Footer />
    </div>
  );
};

export default withDarkHeaderAndFooter;
