import React from "react";
import { progressText, serviceCreationSections } from "./constant";
import { withStyles } from "@material-ui/core/styles";

import ProgressBar from "shared/dist/components/ProgressBar";

import { ServiceCreationRoutes } from "./ServiceCreationRouter/Routes";
import ServiceCreationRouter from "./ServiceCreationRouter";
import Heading from "./Heading";
import { useStyles } from "./styles";

const AiServiceCreation = ({ classes, location }) => {
  const activeSection = () => {
    const { pathname: path } = location;
    const { PROFILE, DEMO, PRICING_AND_DISTRIBUTION, SUBMIT } = serviceCreationSections;

    if (path.includes(ServiceCreationRoutes.PROFILE.path)) {
      return PROFILE;
    } else if (path.includes(ServiceCreationRoutes.DEMO.path)) {
      return DEMO;
    } else if (path.includes(ServiceCreationRoutes.PRICING_AND_DISTRIBUTION.path)) {
      return PRICING_AND_DISTRIBUTION;
    } else if (path.includes(ServiceCreationRoutes.SUBMIT)) {
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
