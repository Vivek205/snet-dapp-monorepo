import React from "react";
import { Switch, Route } from "react-router";
import { OnboardingRoutes } from "./Routes";

const OnboardingRouter = () => {
  return (
    <Switch>
      {Object.values(OnboardingRoutes).map(({ name, path, component, exact }) => (
        <Route key={name} path={path} component={component} exact={exact} />
      ))}
      <Route path={OnboardingRoutes.DEFAULT_PAGE.path} component={OnboardingRoutes.DEFAULT_PAGE.component} />
    </Switch>
  );
};

export default OnboardingRouter;
