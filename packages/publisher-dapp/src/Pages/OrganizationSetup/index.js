import React from "react";
import { progressText, organizationSetupSections } from "./constant";
import ProgressBar from "shared/dist/components/ProgressBar";
import { withStyles } from "@material-ui/core/styles";

import { OrganizationSetupRoutes } from "./OrganizationSetupRouter/Routes";
import OrganizationSetupRouter from "./OrganizationSetupRouter";
import Heading from "./Heading";
import { useStyles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { organizationActions } from "../../Services/Redux/actionCreators";

const OrganizationSetup = ({ classes, location }) => {
  const { id, name, website, shortDescription, longDescription } = useSelector(state => state.organization);
  const dispatch = useDispatch();

  const handleFinishLater = async () => {
    const payload = {
      org_id: id,
      org_uuid: "",
      org_name: name,
      org_type: "organization",
      metadata_ipfs_hash: "",
      description: longDescription,
      short_description: shortDescription,
      url: website,
      contacts: [],
      assets: {},
      groups: [],
    };
    await dispatch(organizationActions.finishLater(payload));
  };

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
    <div className={classes.organizationSetupContainer}>
      <Heading {...activeSection().heading} />
      <ProgressBar activeSection={activeSection().key} progressText={progressText} />
      <OrganizationSetupRouter handleFinishLater={handleFinishLater} />
    </div>
  );
};

export default withStyles(useStyles)(OrganizationSetup);
