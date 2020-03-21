import React from "react";
import isEmpty from "lodash/isEmpty";

import AlertText from "shared/dist/components/AlertText";
import { alertTypes } from "shared/dist/components/AlertBox";
import { orgIdAvailability } from "./content";

const OrganizationIdAvailability = ({ classes, orgDetails, id, availability, loading }) => {
  if (!Boolean(orgDetails.id)) {
    return null;
  }
  if (loading) {
    return (
      <div className={classes.alertTextContainer}>
        <AlertText type={alertTypes.INFO} message="validating..." />
      </div>
    );
  }

  const type = availability === orgIdAvailability.AVAILABLE ? alertTypes.SUCCESS : alertTypes.ERROR;

  const message = !isEmpty(id) && Boolean(availability) ? `Service Id is ${availability}` : "";

  return (
    <div className={classes.alertTextContainer}>
      <AlertText type={type} message={message} />
    </div>
  );
};

export default OrganizationIdAvailability;
