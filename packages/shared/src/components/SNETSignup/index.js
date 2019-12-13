import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import Info from "./Info";
import Form from "./Form";
import { useStyles } from "./styles";

const SNETSignup = props => {
  const classes = useStyles();
  const { info, onSubmit } = props;
  return (
    <Fragment>
      <Grid item xs={12} sm={12} md={6} lg={6} className={classes.signupInfo}>
        <Info {...info} />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} className={classes.signupFormWrapper}>
        <Form onSubmit={onSubmit} />
      </Grid>
    </Fragment>
  );
};

SNETSignup.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.string),
  }),
  onSubmit: PropTypes.func,
};

export default SNETSignup;
