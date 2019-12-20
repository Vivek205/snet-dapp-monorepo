import React from "react";
import { Switch, Route } from "react-router";
import { OrganizationSetupRoutes } from "./Routes";

const OrganizationSetupRouter = () => {
  return (
    <Switch>
      {Object.values(OrganizationSetupRoutes).map(({ name, path, component }) => (
        <Route key={name} path={path} component={component} />
      ))}
      <Route path={OrganizationSetupRoutes.DEFAULT_PAGE.path} component={OrganizationSetupRoutes.DEFAULT_PAGE.component} />
    </Switch>
  );
};

export default OrganizationSetupRouter;
