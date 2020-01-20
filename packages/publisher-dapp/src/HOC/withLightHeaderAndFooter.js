import React, { Fragment } from "react";
import SNETFooter from "shared/dist/components/SNETFooter";

import Header from "../Components/Header";
import Box from "@material-ui/core/Box";

const withLightHeaderAndFooter = Component => {
  return props => (
    <Fragment>
      <Header />
      <Box mt={8}>
        <Component {...props} />
      </Box>
      <SNETFooter />
    </Fragment>
  );
};

export default withLightHeaderAndFooter;
