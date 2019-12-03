import React, { Fragment } from "react";

const withDarkHeader = ({ children }) => {
  return (
    <Fragment>
      <header>Dark Header</header>
      {children}
      <footer>Footer</footer>
    </Fragment>
  );
};

export default withDarkHeader;
