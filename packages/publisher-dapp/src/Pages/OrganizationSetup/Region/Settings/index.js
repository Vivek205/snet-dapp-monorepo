import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles";
import SNETButton from "shared/dist/components/SNETButton";
import SNETTextfield from "shared/dist/components/SNETTextfield";
import SNETTextarea from "shared/dist/components/SNETTextarea";

const Settings = ({ history, handleFinishLater }) => {
  const classes = useStyles();

  return (
  <Fragment>
      <Typography variant="subtitle1">Groups / Region Settings</Typography>
      <Grid container className={classes.settingsContainer}>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.regionNameIdContainer}>
          <Fragment>
            <Typography>Region Name</Typography>
            <Typography>North America</Typography>
          </Fragment>
          <Fragment>
            <Typography>Region ID</Typography>
            <Typography>US-2651-DC</Typography>
          </Fragment>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <SNETTextfield
            icon
            name="id"
            value=" "
            label="Payment Address"
            description="The Metamask address associated with this region."
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <SNETTextfield
            icon
            name="id"
            value=" "
            label="ETCD Endpoint"
            description="Enter all the ETCD end points that will be used."
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <SNETTextarea
            label="Added ETCD Endpoints"
            rowCount="4"
            colCount="102"
            name="shortDescription"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.btnContainer}>
          <SNETButton children="show advanced setting" variant="text" color="primary" />
          <SNETButton children="remove region" variant="text" color="red" />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Settings;
