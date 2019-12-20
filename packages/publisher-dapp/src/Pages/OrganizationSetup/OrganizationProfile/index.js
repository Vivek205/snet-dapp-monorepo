import React from "react";
import { withStyles } from "@material-ui/core/styles";

import SNETTextfield from "shared/dist/components/SNETTextfield";
import { useStyles } from "./styles";

const OrganizationProfile = ({ classes }) => {
  return (
  	<SNETTextfield description="description" label="label" name="name"/>
  )
};

export default withStyles(useStyles)(OrganizationProfile);
