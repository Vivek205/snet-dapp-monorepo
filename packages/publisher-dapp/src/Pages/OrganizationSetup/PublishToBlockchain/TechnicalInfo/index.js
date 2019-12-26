import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import { useStyles } from "./styles";
import AlertBox from "shared/dist/components/AlertBox";
import SNETButton from "shared/dist/components/SNETButton";
import SNETTextfield from "shared/dist/components/SNETTextfield";
import { useSelector } from "react-redux";

const TechnicalInfo = ({ classes }) => {
  const { groups } = useSelector(state => state.organization);
  return (
    <div className={classes.technicalInfoContainer}>
      <Typography variant="subtitle1">Technical Information</Typography>
      <div className={classes.alertBoxBtnContainer}>
        <AlertBox
          message="Please install or log in to Metamask to proceed further.  Learn more about Metamask."
          type="warning"
        />
        <SNETButton color="primary" variant="contained" children="connect metamask" />
      </div>
      {groups.map(group => (
        <Fragment key={group.id}>
          <Typography variant="subtitle1">Group Information</Typography>
          <SNETTextfield
            disabled
            label="Payment Address"
            description="The Metamask address to which all the payments will be transferred "
            name="paymentaddress"
            value={group.paymentAddress}
          />
          {group.paymentConfig.paymentChannelStorageClient.endpoints.map(endpoint => (
            <SNETTextfield
              disabled
              label="ETCD Endpoint"
              description=" ETCD end points that will be used for this organization."
              name="etcdendpoints"
              value={endpoint}
              key={endpoint}
            />
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default withStyles(useStyles)(TechnicalInfo);
