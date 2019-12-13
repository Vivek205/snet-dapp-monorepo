import React from "react";

import SNETSignup from "shared/dist/components/SNETSignup";
import { signupInfo } from "./content";

const Signup = () => {
  const handleSubmit = (nickname, email, password) => {
    // TODO: dispatch signup action
    console.log(nickname, email, password);
  };
  return <SNETSignup info={signupInfo} onSubmit={handleSubmit} />;
};

export default Signup;
