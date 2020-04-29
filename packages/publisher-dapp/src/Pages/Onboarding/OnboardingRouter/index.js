import React from "react";
import { Switch, Route } from "react-router";
import { OnboardingRoutes } from "./Routes";
import PageNotFound from "shared/dist/components/PageNotFound";

const OnboardingRouter = () => {
  return (
    <Switch>
      {Object.values(OnboardingRoutes).map(({ name, path, component, exact }) => (
        <Route key={name} path={path} component={component} exact={exact} />
      ))}
      <Route exact path={OnboardingRoutes.DEFAULT_PAGE.path} component={OnboardingRoutes.DEFAULT_PAGE.component} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default OnboardingRouter;
