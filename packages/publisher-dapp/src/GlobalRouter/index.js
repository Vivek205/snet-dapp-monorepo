import React from "react";
import { BrowserRouter as ReactRouter, Route, Switch } from "react-router-dom";

import { GlobalRoutes } from "./Routes";

const GlobalRouter = () => {
  return (
    <ReactRouter>
      <Switch>
        {Object.values(GlobalRoutes).map(route => (
          <Route key={route.name} path={route.path} component={route.component} />
        ))}
      </Switch>
    </ReactRouter>
  );
};

export default GlobalRouter;
