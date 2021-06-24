import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AuthenticateRoutes } from "../AuthenitcateRouter/Routes";
import { userEntities } from "../../../../Utils/user";

const Default = ({ history }) => {
  const userEntity = useSelector(state => state.user.entity);

  useEffect(() => {
    switch (userEntity) {
      case userEntities.ORGANIZATION:
        return history.push(AuthenticateRoutes.ORGANIZATION.path);
      case userEntities.INVITEE:
        return history.push(AuthenticateRoutes.INVITEE.path);
      case userEntities.INDIVIDUAL:
        return history.push(AuthenticateRoutes.ORGANIZATION.path);
      default:
        return;
    }
  }, [history, userEntity]);

  return <div />;
};

export default Default;
