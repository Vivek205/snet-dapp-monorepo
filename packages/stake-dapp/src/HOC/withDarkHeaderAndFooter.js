import React from "react";
import SNETFooter from "shared/dist/components/SNETFooter";

import Header from "../Components/Header";
import { FooterData } from "./footerContent";

const withDarkHeaderAndFooter = Component => {
  return props => (
    <div>
      <Header />
      <Component {...props} />
      <SNETFooter data={FooterData} />
    </div>
  );
};

export default withDarkHeaderAndFooter;
