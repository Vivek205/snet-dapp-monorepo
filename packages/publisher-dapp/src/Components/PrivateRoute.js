import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, path, isAllowed, redirectTo }) => {
  return (
    <Route
      path={path}
      render={props => {
        if (isAllowed) {
          return <Component {...props} />;
        }
        return <Redirect to={redirectTo} />;
      }}
    />
  );
};

export default PrivateRoute;
