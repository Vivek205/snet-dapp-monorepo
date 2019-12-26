import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles";
import SNETTextfield from "shared/dist/components/SNETTextfield";

const AdvanceSettings = ({ classes, show }) => {
  if (!show) {
    return null;
  }
  return (
    <Fragment>
      <Typography className={classes.heading}>Advanced Settings</Typography>
      <SNETTextfield
        icon
        name="expirationThreashold"
        value=" "
        label="Expiration Threashold"
        description="Lorem ipsum dolor sit amet, pri no agam elit salutatus. An duo odio idque. "
      />
      <SNETTextfield
        icon
        name="clientConnectionTimeout"
        value=" "
        label="Client Connection Timeout"
        description="Lorem ipsum dolor sit amet, summo dicnu debitis ea has, prompta tacimates eam an."
      />
      <SNETTextfield
        icon
        name="clientReqTimeout"
        value=" "
        label="Client Request Timeout"
        description="At debitis luptatum eam, sit eu eirmod prompta necessitatibus, in vis ferri postea. Aliquam iudicabit."
      />
    </Fragment>
  );
};

export default withStyles(useStyles)(AdvanceSettings);
