import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import Info from "./Info";
import Form from "./Form";
import { useStyles } from "./styles";

const SNETSignup = props => {
  const classes = useStyles();
  const { info, onSubmit, signupError } = props;
  return (
    <div className={classes.signupContainer}>
      <Grid container className={classes.signupWrapper}>
        <Grid item xs={12} sm={12} md={5} lg={5} className={classes.signupInfo}>
          <Info {...info} />
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <Form onSubmit={onSubmit} signupError={signupError} />
        </Grid>
      </Grid>
    </div>
  );
};

SNETSignup.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.string),
  }),
  onSubmit: PropTypes.func,
  signupError: PropTypes.string,
};

export default SNETSignup;
