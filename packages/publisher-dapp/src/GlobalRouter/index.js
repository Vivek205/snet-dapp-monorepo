import React, { Suspense, useEffect } from "react";
import { BrowserRouter as ReactRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "shared/dist/components/PageNotFound";
import { useSelector, useDispatch } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";

import { setupRouteAuthentications } from "./Routes";
import { loginActions } from "../Services/Redux/actionCreators/userActions";
import PrivateRoute from "../Components/PrivateRoute";

const GlobalRouter = () => {
  const reduxState = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginActions.initializeApplication);
  }, [dispatch]);

  if (!reduxState.user.isInitialized) {
    return <LinearProgress />;
  }

  const routes = setupRouteAuthentications(reduxState);

  return (
    <ReactRouter>
      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route path="/" exact component={routes.OVERVIEW.component} />
          {Object.values(routes).map(route => {
            if (route.redirectTo) {
              return (
                <PrivateRoute
                  key={route.name}
                  path={route.path}
                  component={route.component}
                  isAllowed={route.isAllowed}
                  redirectTo={route.redirectTo}
                />
              );
            }
            return <Route key={route.name} path={route.path} component={route.component} />;
          })}
          <Route component={PageNotFound} />
        </Switch>
      </Suspense>
    </ReactRouter>
  );
};

export default GlobalRouter;
