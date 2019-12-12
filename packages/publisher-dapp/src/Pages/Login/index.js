import React, { useState } from "react";
import { useDispatch } from "react-redux";

import SNETLogin from "shared/dist/components/SNETLogin";
import { userActions } from "../../Services/Redux/actionCreators";
import { loginErrorMsg } from "./content";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      await dispatch(userActions.login(email, password));
    } catch (error) {
      setError(loginErrorMsg);
    }
  };

  return (
    <SNETLogin
      title="Welcome back"
      email={email}
      onEmailChange={e => setEmail(e.target.value)}
      password={password}
      onPasswordChange={e => setPassword(e.target.value)}
      //   TODO : create a page for forgotPassword and pass the link here
      //   forgotPasswordLink={}
      loginError={error}
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;
