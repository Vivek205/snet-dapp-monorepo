import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import AlertBox,{alertTypes} from "./../AlertBox";
import SNETButton from "./../SNETButton";


import { useStyles } from "./styles";

import { forgotPasswordConstraints } from "./validationConstraints";
import snetValidator from "../../../utility/snetValidator";

const SNETForgotPassword = props =>{
  
  const classes = useStyles();




  const {forgotPasswordErr,onSubmit} = props;
  const [email, setEmail] = useState("");
  const [validationError,setValidationError]=useState(undefined)

  const handleEmail = event => {
    setEmail(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    const isNotValid = snetValidator({ email: email }, forgotPasswordConstraints);
    if (isNotValid) {
      setValidationError(isNotValid[0]);
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
            value={email}
            onChange={handleEmail}
          />
          <AlertBox type={alertTypes.ERROR}  message={forgotPasswordErr || validationError } />
          <SNETButton type="blue" btnText="reset password" onClick={handleSubmit} />
        </form>
      </Grid>
    </Grid>
  );
  

};



SNETForgotPassword.propTypes = {

  forgotPasswordErr:PropTypes.string,
  onSubmit:PropTypes.func

  
};

export default SNETForgotPassword;