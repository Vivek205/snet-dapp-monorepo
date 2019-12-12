import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

import { useStyles } from "./styles";
import SNETButton from "../SNETButton";
import AlertBox from "../AlertBox";

const SNETLogin = props => {
  const classes = useStyles();
  const { title, email, password, forgotPasswordLink, onEmailChange, onPasswordChange, onSubmit, loginError } = props;
  return (
    <Grid container spacing={24}>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.loginDetails}>
        <h2>{title}</h2>
        <form noValidate autoComplete="off" className={classes.loginForm}>
          <TextField
            id="outlined-user-name"
            label="Email"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            value={email}
            autoFocus
            onChange={onEmailChange}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            value={password}
            onChange={onPasswordChange}
          />
          <div className={classes.checkboxSection}>
            <div className={classes.checkbox} />
            <Link to={forgotPasswordLink}>Forgot password?</Link>
          </div>
          <AlertBox type="error" message={loginError} />
          <SNETButton type="blue" btnText="login" onClick={onSubmit} btnType="submit" />
        </form>
      </Grid>
    </Grid>
  );
};

SNETLogin.propTypes = {
  title: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  forgotPasswordLink: PropTypes.string,
  loginError: PropTypes.string,
  onEmailChange: PropTypes.func,
  onPasswordChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default SNETLogin;
