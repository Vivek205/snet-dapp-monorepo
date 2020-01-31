import React from "react";
import { Switch, Route } from "react-router";
import { OrganizationSetupRoutes } from "./Routes";

const OrganizationSetupRouter = RouterProps => {
  return (
    <Switch>
      {Object.values(OrganizationSetupRoutes).map(({ name, path, component: Component, exact }) => (
        <Route key={name} path={path} render={props => <Component {...props} {...RouterProps} />} exact={exact} />
      ))}
      <Route
        path={OrganizationSetupRoutes.DEFAULT_PAGE.path}
        component={props => <OrganizationSetupRoutes.DEFAULT_PAGE.component {...props} {...RouterProps} />}
      />
    </Switch>
  );
};

export default OrganizationSetupRouter;
