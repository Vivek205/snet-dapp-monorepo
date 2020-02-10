import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import last from "lodash/last";

import ProgressBar from "shared/dist/components/ProgressBar";
import { progressText, serviceCreationSections } from "./constant";
import { ServiceCreationRoutes } from "./ServiceCreationRouter/Routes";
import ServiceCreationRouter from "./ServiceCreationRouter";
import Heading from "./Heading";
import { useStyles } from "./styles";
import { aiServiceDetailsActions } from "../../Services/Redux/actionCreators";

const AiServiceCreation = ({ classes, location, match }) => {
  const dispatch = useDispatch();

  const { orgUuid, serviceUuid } = match.params;

  useEffect(() => {
    dispatch(aiServiceDetailsActions.getServiceDetails(orgUuid, serviceUuid));
  }, [dispatch, orgUuid, serviceUuid]);

  const activeSection = useCallback(() => {
    const { pathname: path } = location;
    const { PROFILE, DEMO, PRICING_AND_DISTRIBUTION, SUBMIT } = serviceCreationSections;
    if (path.includes(last(ServiceCreationRoutes.PROFILE.path.split("/")))) {
      return PROFILE;
    }
    if (path.includes(last(ServiceCreationRoutes.DEMO.path.split("/")))) {
      return DEMO;
    }
    if (path.includes(last(ServiceCreationRoutes.PRICING_AND_DISTRIBUTION.path.split("/")))) {
      return PRICING_AND_DISTRIBUTION;
    }
    if (path.includes(last(ServiceCreationRoutes.SUBMIT.path.split("/")))) {
      return SUBMIT;
    }
    return PROFILE;
  }, [location]);

  return (
    <div className={classes.serviceCreationContainer}>
      <Heading {...activeSection().heading} />
      <ProgressBar activeSection={activeSection().key} progressText={progressText} />
      <ServiceCreationRouter />
    </div>
  );
};
export default withStyles(useStyles)(AiServiceCreation);
