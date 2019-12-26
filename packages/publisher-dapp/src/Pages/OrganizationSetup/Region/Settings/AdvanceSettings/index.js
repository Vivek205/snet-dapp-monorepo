import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles";
import SNETTextfield from "shared/dist/components/SNETTextfield";
import { useDispatch } from "react-redux";
import { organizationActions } from "../../../../../Services/Redux/actionCreators";

const AdvanceSettings = ({ classes, show, groups, group, groupIndex }) => {
  const dispatch = useDispatch();
  const { paymentExpirationThreshold, paymentChannelStorageClient } = group.paymentConfig;
  const { connectionTimeout, requestTimeout } = paymentChannelStorageClient;

  if (!show) {
    return null;
  }

  const handleThresholdChange = event => {
    const { value } = event.target;
    const updatedGroups = [...groups];
    updatedGroups[groupIndex] = {
      ...group,
      paymentConfig: {
        ...group.paymentConfig,
        paymentExpirationThreshold: value,
      },
    };
    dispatch(organizationActions.setGroups(updatedGroups));
  };

  const handleTimeoutChange  = event => {
    const {name, value } = event.target;
    const updatedGroups = [...groups];
    updatedGroups[groupIndex] = {
      ...group,
      paymentConfig: {
        ...group.paymentConfig,
        paymentChannelStorageClient:{
          ...group.paymentConfig.paymentChannelStorageClient,
        [name]:   value
        }
      },
    };
    dispatch(organizationActions.setGroups(updatedGroups));
  };

  return (
    <Fragment>
      <Typography className={classes.heading}>Advanced Settings</Typography>
      <SNETTextfield
        icon
        name="paymentExpirationThreshold"
        value={paymentExpirationThreshold}
        label="Expiration Threashold"
        onChange={handleThresholdChange}
        description="Lorem ipsum dolor sit amet, pri no agam elit salutatus. An duo odio idque. "
      />
      <SNETTextfield
        icon
        name="connectionTimeout"
        value={connectionTimeout}
        label="Client Connection Timeout"
    onChange={handleTimeoutChange}
        description="Lorem ipsum dolor sit amet, summo dicnu debitis ea has, prompta tacimates eam an."
      />
      <SNETTextfield
        icon
        name="requestTimeout"
        value={requestTimeout}
        label="Client Request Timeout"
        onChange={handleTimeoutChange}
        description="At debitis luptatum eam, sit eu eirmod prompta necessitatibus, in vis ferri postea. Aliquam iudicabit."
      />
    </Fragment>
  );
};

export default withStyles(useStyles)(AdvanceSettings);
