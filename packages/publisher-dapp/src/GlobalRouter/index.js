import React, { Suspense } from "react";
import { BrowserRouter as ReactRouter, Route, Switch } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import PageNotFound from "shared/dist/components/PageNotFound";

import { GlobalRoutes } from "./Routes";

const GlobalRouter = () => {
  return (
    <ReactRouter>
      <Suspense fallback={<CircularProgress />}>
        <Switch>
          <Route path="/" exact component={GlobalRoutes.HOW_IT_WORKS.component} />
          {Object.values(GlobalRoutes).map(route => (
            <Route key={route.name} path={route.path} component={route.component} />
          ))}
          <Route component={PageNotFound} />
        </Switch>
      </Suspense>
    </ReactRouter>
  );
};

export default GlobalRouter;
