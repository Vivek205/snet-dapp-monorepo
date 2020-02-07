import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { withStyles } from "@material-ui/core/styles";

import ProgressBar from "shared/dist/components/ProgressBar";

import { progressText, serviceCreationSections } from "./constant";
import { ServiceCreationRoutes } from "./ServiceCreationRouter/Routes";
import ServiceCreationRouter from "./ServiceCreationRouter";
import Heading from "./Heading";
import { useStyles } from "./styles";

import { aiServiceDetailsActions } from "../../Services/Redux/actionCreators";

const AiServiceCreation = ({ classes, location }) => {
  const dispatch = useDispatch();

  // TODO: Need to get the Org & service UUID from Redux
  const orgUuid = "test_org_uuid";
  const serviceUuid = "154a074ceecd4a7b9ae01d283823db8f";

  useEffect(() => {
    dispatch(aiServiceDetailsActions.getServiceDetails(orgUuid, serviceUuid));
  }, [dispatch]);

  const activeSection = () => {
    const { pathname: path } = location;
    const { PROFILE, DEMO, PRICING_AND_DISTRIBUTION, SUBMIT } = serviceCreationSections;

    if (path.includes(ServiceCreationRoutes.PROFILE.path)) {
      return PROFILE;
    }
    if (path.includes(ServiceCreationRoutes.DEMO.path)) {
      return DEMO;
    }
    if (path.includes(ServiceCreationRoutes.PRICING_AND_DISTRIBUTION.path)) {
      return PRICING_AND_DISTRIBUTION;
    }
    if (path.includes(ServiceCreationRoutes.SUBMIT.path)) {
      return SUBMIT;
    }
    return PROFILE;
  };

  return (
    <div className={classes.serviceCreationContainer}>
      <Heading {...activeSection().heading} />
      <ProgressBar activeSection={activeSection().key} progressText={progressText} />
      <ServiceCreationRouter />
    </div>
  );
};
export default withStyles(useStyles)(AiServiceCreation);
