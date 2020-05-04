import React, { useEffect } from "react";
import { ServiceCreationRoutes } from "../ServiceCreationRouter/Routes";

const Default = ({ history, match }) => {
  const { orgUuid, serviceUuid } = match.params;

  useEffect(() => {
    return history.push(
      ServiceCreationRoutes.PROFILE.path.replace(":orgUuid", orgUuid).replace(":serviceUuid", serviceUuid)
    );
  }, [history, orgUuid, serviceUuid]);

  return <div />;
};

export default Default;
