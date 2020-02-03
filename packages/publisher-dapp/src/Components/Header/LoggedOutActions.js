import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

import SNETButton from "shared/src/components/SNETButton";
import { GlobalRoutes } from "../../GlobalRouter/Routes";

const LoggedOutActions = () => {
  const history = useHistory();

  return (
    <Fragment>
      <SNETButton children="login" color="primary" onClick={() => history.push(GlobalRoutes.LOGIN.path)} />
      <SNETButton
        children="enroll"
        color="primary"
        variant="contained"
        onClick={() => history.push(GlobalRoutes.ENROLL.path)}
      />
    </Fragment>
  );
};

export default LoggedOutActions;
