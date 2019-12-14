import React, { useState } from "react";
import { useDispatch } from "react-redux";

import SNETSignup from "shared/dist/components/SNETSignup";
import { signupInfo } from "./content";
import { signup } from "../../Services/Redux/actionCreators/userActions";

const Signup = () => {
  const [signupError, setSignupError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (nickname, email, password) => {
    try {
      await dispatch(signup(nickname, email, password));
    } catch (error) {
      setSignupError("Signup Failed");
    }
  };
  return <SNETSignup info={signupInfo} onSubmit={handleSubmit} signupError={signupError} />;
};

export default Signup;
