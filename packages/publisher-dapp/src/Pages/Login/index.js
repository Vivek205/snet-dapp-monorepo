import React, { useState } from "react";
import { useDispatch } from "react-redux";

import SNETLogin from "shared/dist/components/SNETLogin";
import { userActions } from "../../Services/Redux/actionCreators";
import { loginErrorMsg } from "./content";

const Login = () => {
  const [error, setError] = useState(undefined);

  const dispatch = useDispatch();

  const handleSubmit = async (email, password) => {
    try {
      await dispatch(userActions.login(email, password));
    } catch (error) {
      setError(loginErrorMsg);
    }
  };

  return (
    <SNETLogin
      title="Welcome back"
      //   TODO : create a page for forgotPassword and pass the link here
      //   forgotPasswordLink={}
      loginError={error}
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;
