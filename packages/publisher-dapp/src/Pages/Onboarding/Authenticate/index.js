import React, { useEffect } from "react";
import AuthenticateRouter from "./AuthenitcateRouter";
import { GlobalRoutes } from "../../../GlobalRouter/Routes";
import { useSelector } from "react-redux";
import { OnboardingRoutes } from "../OnboardingRouter/Routes";

const Authenticate = ({ history }) => {
  const { isInitialized, isLoggedIn, publisherTnC } = useSelector(state => state.user);

  useEffect(() => {
    if (!publisherTnC.accepted) {
      history.push(OnboardingRoutes.ACCEPT_SERVICE_AGREEMENT.path);
    }
  }, [history, publisherTnC.accepted]);

  useEffect(() => {
    if (isInitialized && !isLoggedIn) {
      history.push(GlobalRoutes.LOGIN.path);
    }
  }, [history, isInitialized, isLoggedIn]);

  return <AuthenticateRouter />;
};

export default Authenticate;
