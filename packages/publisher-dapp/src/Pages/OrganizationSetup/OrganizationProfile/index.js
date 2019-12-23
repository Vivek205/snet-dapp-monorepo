import React, { Fragment, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import BasicDetails from "./BasicDetails";
import OrgImg from "./OrgImg";
import SupportDetails from "./SupportDetails";
import { useStyles } from "./styles";
import SNETButton from "shared/dist/components/SNETButton";
import { OrganizationSetupRoutes } from "../OrganizationSetupRouter/Routes";
import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";

const OrganizationProfile = ({ classes, history, handleFinishLater }) => {
  const [alert, setAlert] = useState({});

  const handleContinue = () => {
    history.push(OrganizationSetupRoutes.REGION.path);
  };

  const onFinishLater = async () => {
    try {
      setAlert({});
      await handleFinishLater();
      setAlert({ type: alertTypes.SUCCESS, message: "Changes have been saved to draft" });
    } catch (error) {
      setAlert({ type: alertTypes.ERROR, message: "Unable to save draft. Please try later" });
    }
  };

  return (
    <Fragment>
      <Grid className={classes.box}>
        <Typography variant="h5">OrganizationProfile</Typography>
        <BasicDetails />
        <OrgImg />
        <hr />
        <SupportDetails />
        <AlertBox type={alert.type} message={alert.message} />
      </Grid>
      <div className={classes.buttonsContainer}>
        <SNETButton color="primary" children="finish later" onClick={onFinishLater} />
        <SNETButton color="primary" variant="contained" children="continue" onClick={handleContinue} />
      </div>
    </Fragment>
  );
};

export default withStyles(useStyles)(OrganizationProfile);
