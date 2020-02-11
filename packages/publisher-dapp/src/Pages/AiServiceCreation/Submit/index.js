import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

import { useStyles } from "./styles";
import SubmitForReview from "./SubmitForReview";
import LaunchService from "./LaunchService";
import { serviceCreationStatus } from "../constant";

const selectState = state => ({ serviceDetails: state.aiServiceDetails });

const Submit = () => {
  const { serviceDetails } = useSelector(selectState);

  if (serviceDetails.serviceState.state === serviceCreationStatus.NOT_STARTED) {
    return <SubmitForReview />;
  }

  return <LaunchService />;
};
export default withStyles(useStyles)(Submit);
