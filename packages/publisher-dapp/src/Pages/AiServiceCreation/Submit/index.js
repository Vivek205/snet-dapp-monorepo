import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { useStyles } from "./styles";
import SubmitForReview from "./SubmitForReview";
import LaunchService from "./LaunchService";
import { serviceCreationStatus } from "../constant";

const Submit = ({ serviceDetails, changeServiceProviderComments, changeGroups }) => {
  const allowSubmitForReview =
    serviceDetails.serviceState.state === serviceCreationStatus.NOT_STARTED ||
    serviceDetails.serviceState.state === serviceCreationStatus.DRAFT;

  if (allowSubmitForReview) {
    return (
      <SubmitForReview
        serviceDetails={serviceDetails}
        changeServiceProviderComments={changeServiceProviderComments}
        changeGroups={changeGroups}
      />
    );
  }

  return <LaunchService />;
};
export default withStyles(useStyles)(Submit);
