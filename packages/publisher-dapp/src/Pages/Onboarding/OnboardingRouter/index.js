import React from "react";
import { Switch, Route } from "react-router";
import { OnboardingRoutes } from "./Routes";

const OnboardingRouter = () => {
  return (
    <Switch>
      {Object.values(OnboardingRoutes).map(({ name, path, component }) => (
        <Route key={name} path={path} component={component} />
      ))}
    </Switch>
  );
};

export default OnboardingRouter;
