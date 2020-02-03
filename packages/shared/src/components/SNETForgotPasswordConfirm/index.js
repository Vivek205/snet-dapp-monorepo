import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import AlertBox from "../AlertBox";
import SNETButton from "../SNETButton";
import validator from "../../utils/validator";
import { forgotPassworSubmitConstraints } from "./validationConstraints";

const SNETForgotPasswordConfirm = ({ title, forgotPasswordConfirmError, onSubmit }) => {
  const classes = useStyles();

  const [showEmailSentAlert, setShowEmailSentAlert] = useState(true);
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationErr, setValidationErr] = useState("");

  const handleEnterOtp = event => {
    event.preventDefault();
    setShowEmailSentAlert(false);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setValidationErr("");
    const isNotValid = validator({ password, confirmPassword, code }, forgotPassworSubmitConstraints);
    if (isNotValid) {
      setValidationErr(isNotValid[0]);
      return;
    }

    // Assuming the user state has the email, no need to explicitly pass it to this comp
    onSubmit(code, password);
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
        <Typography variant="h2">{title}</Typography>
        <p>Enter the verification code and new password.</p>
        <form autoComplete="off" className={classes.forgotPwdForm}>
          <TextField
            id="outlined-code-input"
            label="Code"
            className={classes.textField}
            autoComplete="off"
            type="text"
            name="code"
            margin="normal"
            variant="outlined"
            value={code}
            onChange={e => setCode(e.target.value)}
          />
          <TextField
            id="outlined-new-password-input"
            label="New Password"
            className={classes.textField}
            autoComplete="off"
            type="password"
            name="email"
            margin="normal"
            variant="outlined"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <TextField
            id="outlined-confirm-password-input"
            label="Confirm Password"
            className={classes.textField}
            autoComplete="off"
            type="password"
            name="email"
            margin="normal"
            variant="outlined"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <AlertBox type="error" message={validationErr || forgotPasswordConfirmError} />
          <SNETButton
            color="primary"
            variant="contained"
            children="reset password"
            type="submit"
            onClick={handleSubmit}
          />
        </form>
      </Grid>
    </Grid>
  );
};

SNETForgotPasswordConfirm.propTypes = {
  title: PropTypes.string,
  forgotPasswordConfirmError: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default SNETForgotPasswordConfirm;
