import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import SNETSignup from "shared/dist/components/SNETSignup";
import { signupInfo } from "./content";
import { signupActions } from "../../Services/Redux/actionCreators/userActions";
import { GlobalRoutes } from "../../GlobalRouter/Routes";
import { loaderActions } from "../../Services/Redux/actionCreators";
import { LoaderContent } from "../../Utils/Loader";
import { initSDK } from "shared/dist/utils/snetSdk";

const Signup = props => {
  const { history } = props;
  const [signupError, setSignupError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const checkIfMMisConnected = async () => {
      try {
        dispatch(loaderActions.startAppLoader(LoaderContent.CONNECT_METAMASK));
        await initSDK();
        dispatch(loaderActions.stopAppLoader());
      } catch (e) {
        history.push(GlobalRoutes.CONNECT_METAMASK.path);
      }
    };
    checkIfMMisConnected();
  }, [dispatch, history]);

  const handleSubmit = async (nickname, email, password) => {
    try {
      await dispatch(signupActions.signup(nickname, email, password));
      history.push(GlobalRoutes.SIGNUP_CONFIRM.path);
    } catch (error) {
      if (error.name === "AuthError") {
        setSignupError(error.message);
        return;
      }
      setSignupError("Singup Failed");
    }
  };
  return <SNETSignup info={signupInfo} onSubmit={handleSubmit} signupError={signupError} />;
};

export default Signup;
