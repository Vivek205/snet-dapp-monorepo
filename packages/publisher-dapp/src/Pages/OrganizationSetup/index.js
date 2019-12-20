import React, { Fragment } from "react";
import { progressText, organizationSetupSections } from "./constant";
import ProgressBar from "shared/dist/components/ProgressBar";
import { withStyles } from "@material-ui/core/styles";

import { OrganizationSetupRoutes } from "./OrganizationSetupRouter/Routes";
import OrganizationSetupRouter from "./OrganizationSetupRouter";
import Heading from "./Heading";
import { useStyles } from "./styles";

const OrganizationSetup = ({ classes, location }) => {
  const activeSection = () => {
    const { pathname: path } = location;
    const { ORGANIZATION_PROFILE, REGION, PUBLISH_TO_BLOCKCHAIN } = organizationSetupSections;

    if (path.includes(OrganizationSetupRoutes.ORGANIZATION_PROFILE.path)) {
      return ORGANIZATION_PROFILE;
    } else if (path.includes(OrganizationSetupRoutes.REGION.path)) {
      return REGION;
    } else if (path.includes(OrganizationSetupRoutes.PUBLISH_TO_BLOCKCHAIN.path)) {
      return PUBLISH_TO_BLOCKCHAIN;
    }
    return ORGANIZATION_PROFILE;
  };

  return (
    <div className={classes.organixationSetupContainer}>
      <Heading {...activeSection().heading} />
      <ProgressBar activeSection={activeSection().key} progressText={progressText} />
      <OrganizationSetupRouter />
    </div>
  );
};

export default withStyles(useStyles)(OrganizationSetup);
