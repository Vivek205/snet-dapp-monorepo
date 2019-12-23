import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles";
import AlertBox from "shared/dist/components/AlertBox";
import SNETButton from "shared/dist/components/SNETButton";
import SNETTextfield from "shared/dist/components/SNETTextfield";

const TechnicalInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.technicalInfoContainer}>
      <Typography variant="subtitle1">Technical Information</Typography>
      <div className={classes.alertBoxBtnContainer}>
        <AlertBox message="Please install or log in to Metamask to proceed further.  Learn more about Metamask." type="warning" />
        <SNETButton color="primary" variant="contained" children="connect metamask" />
      </div>
      <SNETTextfield
        label="Payment Address"
        description="The Metamask address to which all the payments will be transferred "
        name="paymentaddress"
      />
      <SNETTextfield
        label="ETCD Endpoint"
        description=" ETCD end points that will be used for this organization."
        name="etcdendpoints"
      />
    </div>
  );
};

export default TechnicalInfo;
