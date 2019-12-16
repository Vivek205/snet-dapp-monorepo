import React from "react";
import { Switch, Route } from "react-router";
import { OnboardingRoutes } from "./Routes";

const OnboardingRouter = onboardingProps => {
  return (
    <Switch>
      {Object.values(OnboardingRoutes).map(({ name, path, component: Component }) => (
        <Route key={name} path={path} render={props => <Component {...props} {...onboardingProps} />} />
      ))}
    </Switch>
  );
};

export default OnboardingRouter;
