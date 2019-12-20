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
    const strippedPath = path => path.split("/")[2];
    const { ORGANIZATION_PROFILE, REGION, PUBLISH_TO_BLOCKCHAIN } = organizationSetupSections;

    switch (strippedPath(path)) {
      case strippedPath(OrganizationSetupRoutes.ORGANIZATION_PROFILE.path): {
        return ORGANIZATION_PROFILE;
      }
      case strippedPath(OrganizationSetupRoutes.REGION.path): {
        return REGION;
      }
      case strippedPath(OrganizationSetupRoutes.PUBLISH_TO_BLOCKCHAIN.path): {
        return PUBLISH_TO_BLOCKCHAIN;
      }
      default: {
        return ORGANIZATION_PROFILE;
      }
    }
  };

  return (
    <div className={classes.organixationSetupContainer}>
      <Heading {...activeSection().heading} />
      <ProgressBar activeSection={activeSection()} progressText={progressText} />
      <OrganizationSetupRouter />
    </div>
  );
};

export default withStyles(useStyles)(OrganizationSetup);
