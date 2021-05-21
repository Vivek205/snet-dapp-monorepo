import React, { Fragment } from "react";

import Box from "@material-ui/core/Box";

import SNETFooter from "shared/dist/components/SNETFooter";

import { FooterData } from "./footerContent";
import Header from "../Components/Header";

const withLightHeaderAndFooter = Component => {
  return props => (
    <Fragment>
      <Header />
      <Box mt={8}>
        <Component {...props} />
      </Box>
      <SNETFooter data={FooterData} />
    </Fragment>
  );
};

export default withLightHeaderAndFooter;
