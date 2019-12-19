import React from "react";
import { Switch, Route } from "react-router";
import { AuthenticateIdRoutes } from "./Router";

const AuthenticateIdRouter = () => {
  return (
    <Switch>
      {Object.values(AuthenticateIdRoutes).map(({ name, path, component }) => (
        <Route key={name} path={path} component={component} />
      ))}
    </Switch>
  );
};

export default AuthenticateIdRouter;
