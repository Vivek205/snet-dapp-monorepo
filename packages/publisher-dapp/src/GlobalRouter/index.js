import React, { Suspense, useEffect } from "react";
import { BrowserRouter as ReactRouter, Route, Switch } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import PageNotFound from "shared/dist/components/PageNotFound";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";

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
    return <Typography>Just a moment. We are getting things ready for you.</Typography>;
  }

  const routes = setupRouteAuthentications(reduxState);

  return (
    <ReactRouter>
      <Suspense fallback={<CircularProgress />}>
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
