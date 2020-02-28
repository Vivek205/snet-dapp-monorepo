import React from "react";
import { Switch, Route } from "react-router";
import { AuthenticateRoutes } from "./Routes";

const AuthenticateRouter = () => {
  return (
    <Switch>
      {Object.values(AuthenticateRoutes).map(({ name, path, component }) => (
        <Route key={name} path={path} component={component} />
      ))}
      <Route path={AuthenticateRoutes.DEFAULT.path} component={AuthenticateRoutes.DEFAULT.component} />
    </Switch>
  );
};

export default AuthenticateRouter;
