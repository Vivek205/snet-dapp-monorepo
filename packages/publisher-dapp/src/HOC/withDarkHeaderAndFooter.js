import React from "react";
import Footer from "shared/dist/components/Footer";

const withDarkHeaderAndFooter = Component => {
  return props => (
    <div>
      <header>Dark Header</header>
      <Component {...props} />
      <Footer />
    </div>
  );
};

export default withDarkHeaderAndFooter;
