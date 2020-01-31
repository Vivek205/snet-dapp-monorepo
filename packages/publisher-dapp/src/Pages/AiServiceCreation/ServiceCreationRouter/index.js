import React from "react";
import { Switch, Route } from "react-router";
import { ServiceCreationRoutes } from "./Routes";

const ServiceCreationRouter = RouterProps => {
  return (
    <Switch>
      {Object.values(ServiceCreationRoutes).map(({ name, path, component: Component, exact }) => (
        <Route key={name} path={path} render={props => <Component {...props} {...RouterProps} />} exact={exact} />
      ))}
      <Route
        path={ServiceCreationRoutes.DEFAULT_PAGE.path}
        component={props => <ServiceCreationRoutes.DEFAULT_PAGE.component {...props} {...RouterProps} />}
      />
    </Switch>
  );
};

export default ServiceCreationRouter;
