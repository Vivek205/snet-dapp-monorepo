import React, { Suspense, useEffect } from "react";
import { BrowserRouter as ReactRouter, Route, Switch } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import PageNotFound from "shared/dist/components/PageNotFound";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";

import { GlobalRoutes } from "./Routes";
import { loginActions } from "../Services/Redux/actionCreators/userActions";

const GlobalRouter = () => {
  const { isInitialized } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginActions.initializeApplication);
  }, [dispatch]);

  if (!isInitialized) {
    return <Typography>Just a moment. We are getting things ready for you.</Typography>;
  }
  return (
    <ReactRouter>
      <Suspense fallback={<CircularProgress />}>
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
