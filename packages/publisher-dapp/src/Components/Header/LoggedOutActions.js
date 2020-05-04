import React, { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import SNETButton from "shared/dist/components/SNETButton";
import { GlobalRoutes } from "../../GlobalRouter/Routes";

const LoggedOutActions = () => {
  const history = useHistory();
  const location = useLocation();

  const continueButtonDetails = () => {
    if (location.pathname === GlobalRoutes.ENROLL.path) {
      return { children: "continue", onClick: () => history.push(GlobalRoutes.SIGNUP.path) };
    }
    return { children: "get started", onClick: () => history.push(GlobalRoutes.ENROLL.path) };
  };

  return (
    <Fragment>
      <SNETButton children="login" color="primary" onClick={() => history.push(GlobalRoutes.LOGIN.path)} />
      <SNETButton color="primary" variant="contained" {...continueButtonDetails()} />
    </Fragment>
  );
};

export default LoggedOutActions;
