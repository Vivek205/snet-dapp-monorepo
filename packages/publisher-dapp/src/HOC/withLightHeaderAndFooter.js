import React, { Fragment } from "react";
import Footer from "shared/dist/components/Footer";

import Header from "../Components/Header";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const withLightHeaderAndFooter = Component => {
  return props => (
    <Fragment>
      <Header />
      <Container>
        <Box my={8}>
          <Component {...props} />          
        </Box>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default withLightHeaderAndFooter;
