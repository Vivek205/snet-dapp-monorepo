import React from "react";
// import { useSelector } from "react-redux";

import { individualVerificationStatusList } from "../../../constant";
import Pending from "./Pending";
import Denied from "./Denied";
import Approved from "./Approved";

const StatusComponents = {
  [individualVerificationStatusList.PENDING]: Pending,
  [individualVerificationStatusList.APPROVED]: Approved,
  [individualVerificationStatusList.DENIED]: Denied,
};

const IndividualStatus = () => {
  // const status = useSelector(state => state.user.individualVerificationStatus);
  const status = individualVerificationStatusList.APPROVED;

  const Component = StatusComponents[status];

  if (Component) {
    return <Component />;
  }

  return <div>Status not available</div>;
};

export default IndividualStatus;
