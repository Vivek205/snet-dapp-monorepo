import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import BasicDetails from "./BasicDetails";
import OrgImg from "./OrgImg";
import SupportDetails from "./SupportDetails";
import { useStyles } from "./styles";
import SNETButton from "shared/dist/components/SNETButton";
import { OrganizationSetupRoutes } from "../OrganizationSetupRouter/Routes";

const OrganizationProfile = ({ classes, history }) => {
  const handleContinue = () => {
    history.push(OrganizationSetupRoutes.REGION.path);
  };

  return (
    <Fragment>
      <Grid className={classes.box}>
        <Typography variant="h5">OrganizationProfile</Typography>
        <BasicDetails />
        <OrgImg />
        <hr />
        <SupportDetails />
      </Grid>
      <div className={classes.buttonsContainer}>
        <SNETButton color="primary" children="finish later" />
        <SNETButton color="primary" variant="contained" children="continue" onClick={handleContinue} />
      </div>
    </Fragment>
  );
};

export default withStyles(useStyles)(OrganizationProfile);
