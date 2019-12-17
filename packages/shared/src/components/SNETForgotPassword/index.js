import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import AlertBox from "shared/dist/components/AlertBox";
import StyledButton from "shared/dist/components/StyledButton";

import { useStyles } from "./styles";

import { forgotPasswordConstraints } from "./validationConstraints";
import snetValidator from "../../../utility/snetValidator";
import PropTypes from "prop-types";




const SNETForgotPassword = props =>{
  
  const classes = useStyles();




  const {email, error,updateError,onSubmit} = props;
  const [localEmail, setEmail] = useState(email);

  const handleEmail = event => {
    setEmail(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    const isNotValid = snetValidator({ email: localEmail }, forgotPasswordConstraints);
    if (isNotValid) {
      updateError(isNotValid[0]);
      return;
    }
    onSubmit(email)

  };

  return (
    <Grid container spacing={24} className={classes.forgotPwdMainContainer}>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.forgotPwdContent}>
        <h2>Forgot your pasword?</h2>
        <p>We'll email you instructions on how to reset it.</p>
        <form noValidate autoComplete="off" className={classes.forgotPwdForm}>
          <TextField
            id="outlined-username-input"
            label="Email"
            className={classes.textField}
            type="text"
            name="email"
            margin="normal"
            variant="outlined"
            value={localEmail}
            onChange={handleEmail}
          />
          <AlertBox type="error" message={error} />
          <StyledButton type="blue" btnText="reset password" onClick={handleSubmit} />
        </form>
      </Grid>
    </Grid>
  );
  

};



SNETForgotPassword.propTypes = {
  email:PropTypes.string,
  error:PropTypes.string,
  updateError:PropTypes.func,
  onSubmit:PropTypes.func

  
};

export default SNETForgotPassword;