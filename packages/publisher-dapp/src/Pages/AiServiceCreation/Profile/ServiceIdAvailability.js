import React from "react";
import isEmpty from "lodash/isEmpty";

import AlertText from "shared/dist/components/AlertText";
import { alertTypes } from "shared/dist/components/AlertBox";
import { serviceIdAvailability } from "../constant";

const ServiceIdAvailability = ({ classes, serviceDetails, id, availability, loading }) => {
  if (!Boolean(serviceDetails.newId) && !Boolean(serviceDetails.id)) {
    return null;
  }
  if (loading) {
    return (
      <div className={classes.alertTextContainer}>
        <AlertText type={alertTypes.INFO} message="validating..." />
      </div>
    );
  }

  const type =
    !Boolean(serviceDetails.newId) || availability === serviceIdAvailability.AVAILABLE
      ? alertTypes.SUCCESS
      : alertTypes.ERROR;

  const message =
    !isEmpty(id) && Boolean(availability) && serviceDetails.newId !== serviceDetails.id
      ? `Service Id is ${availability}`
      : "";

  return (
    <div className={classes.alertTextContainer}>
      <AlertText type={type} message={message} />
    </div>
  );
};

export default ServiceIdAvailability;
