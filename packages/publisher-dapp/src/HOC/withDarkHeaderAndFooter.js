import React from "react";
import SNETFooter from "shared/dist/components/SNETFooter";

import Header from "../Components/Header";

const withDarkHeaderAndFooter = Component => {
  return props => (
    <div>
      <Header />
      <Component {...props} />
      <SNETFooter />
    </div>
  );
};

export default withDarkHeaderAndFooter;
