import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AlertBox from "shared/dist/components/AlertBox";
import StyledButton from "shared/dist/components/StyledButton";
import { useStyles } from "./styles";
import snetValidator from "../../../utility/snetValidator";
import { forgotPassworSubmitConstraints } from "./validationConstraints";
import PropTypes from "prop-types";


const SNETForgotPasswordSubmit = props => {
  const classes = useStyles();
  const {error, email,updateError,onSubmit } =props ;
  const [showEmailSentAlert, setShowEmailSentAlert] = useState(true);
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCode = event => {
    setCode(event.currentTarget.value);
  };

  const handlePassword = event => {
    setPassword(event.currentTarget.value);
  };

  const handleConfirmPassword = event => {
    setConfirmPassword(event.target.value);
  };

  const handleEnterOtp = event => {
    event.preventDefault();
    setShowEmailSentAlert(false);
  };


  const handleSubmit = event => {
    event.preventDefault();

    const isNotValid = snetValidator({ password, confirmPassword, code }, forgotPassworSubmitConstraints);
    if (isNotValid) {
      updateError(isNotValid[0]);
      return;
    }
    onSubmit({ email, code, password, error });
  };

  if (showEmailSentAlert) {
    return (
      <section className={classes.resetPasswordContainer}>
        <span>Reset Password Email Sent.</span>
        <p>
          Click <a onClick={handleEnterOtp}>here</a> to enter the verification code.
        </p>
      </section>
    );
  }

  return (
    <Grid container spacing={24}>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.forgotPwdContent}>
        <h2>Verification Code</h2>
        <p>Enter the verification code and new password.</p>
        <form className={classes.forgotPwdForm}>
          <TextField
            id="outlined-code-input"
            label="Code"
            className={classes.textField}
            type="text"
            name="code"
            margin="normal"
            variant="outlined"
            value={code}
            onChange={handleCode}
          />
          <TextField
            id="outlined-new-password-input"
            label="New Password"
            className={classes.textField}
            type="password"
            name="email"
            margin="normal"
            variant="outlined"
            value={password}
            onChange={handlePassword}
          />
          <TextField
            id="outlined-confirm-password-input"
            label="Confirm Password"
            className={classes.textField}
            type="password"
            name="email"
            margin="normal"
            variant="outlined"
            value={confirmPassword}
            onChange={handleConfirmPassword}
          />
          <AlertBox message={error} />
          <StyledButton type="blue" btnText="Reset Password" onClick={handleSubmit} />
        </form>
      </Grid>
    </Grid>
  );

};

SNETForgotPasswordSubmit.propTypes = {
  email:PropTypes.string,
  error:PropTypes.string, 
  updateError:PropTypes.func,
  onSubmit: PropTypes.func
};

export default SNETForgotPasswordSubmit;
