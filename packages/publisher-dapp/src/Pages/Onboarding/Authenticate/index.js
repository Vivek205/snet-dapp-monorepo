import React, { useEffect } from "react";
import AuthenticateIdRouter from "./Router";
import { AuthenticateIdRoutes } from "./Router/Router";

const Authenticate = ({ history }) => {
  useEffect(() => {
    history.push(AuthenticateIdRoutes.ORGANIZATION.path);
  }, [history]);

  return (
    <div>
      Authticate
      <AuthenticateIdRouter />
    </div>
  );
};

export default Authenticate;
