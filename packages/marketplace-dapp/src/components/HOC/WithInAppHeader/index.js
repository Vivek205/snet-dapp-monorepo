import React, { Fragment } from "react";
import Footer from "shared/dist/components/Footer";

import Header from "../../common/Header";
import { useStyles } from "./styles";

const withInAppWrapper = InputComponent => {
  return props => {
    const classes = useStyles();
    return (
      <Fragment>
        <Header />
        <div className={classes.scrollableContent}>
          <InputComponent {...props} />
          <Footer />
        </div>
      </Fragment>
    );
  };
};

export default withInAppWrapper;
