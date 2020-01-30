import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ServiceCreationRoutes } from "../ServiceCreationRouter/Routes";

const Default = ({ history }) => {
  const { verificationStatus } = useSelector(state => state.user);

  useEffect(() => {
    return history.push(ServiceCreationRoutes.PROFILE.path);
  }, [history, verificationStatus]);

  return <div />;
};

export default Default;
