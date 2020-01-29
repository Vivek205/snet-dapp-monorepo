import React, { Suspense, useEffect } from "react";
import { BrowserRouter as ReactRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "shared/dist/components/PageNotFound";
import { useSelector, useDispatch } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";

import { GlobalRoutes } from "./Routes";
import { loginActions } from "../Services/Redux/actionCreators/userActions";

const GlobalRouter = () => {
  const { isInitialized } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginActions.initializeApplication);
  }, [dispatch]);

  if (!isInitialized) {
    return <LinearProgress />;
  }
  return (
    <ReactRouter>
      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route path="/" exact component={GlobalRoutes.OVERVIEW.component} />
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
