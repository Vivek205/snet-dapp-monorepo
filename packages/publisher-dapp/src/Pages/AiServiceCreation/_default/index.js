import React, { useEffect } from "react";
import { ServiceCreationRoutes } from "../ServiceCreationRouter/Routes";

const Default = ({ history }) => {
  useEffect(() => {
    return history.push(ServiceCreationRoutes.PROFILE.path);
  }, [history]);

  return <div />;
};

export default Default;
