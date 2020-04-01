import React from "react";
import Grid from "@material-ui/core/Grid";
import InfoIcon from "@material-ui/icons/Info";
import Typography from "@material-ui/core/Typography";

const ClaimsAggregate = ({ aggregatePaymentDetails }) => {
  return (
    <Grid container xs={12} sm={12} md={12} lg={12}>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <InfoIcon />
        <Typography>Pending</Typography>
        <Typography>{`${aggregatePaymentDetails.amount}`}</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Typography>Expiring count</Typography>
        <Typography>{aggregatePaymentDetails.expiry.d7.count}</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <InfoIcon />
        <Typography>Expiring Amount</Typography>
        <Typography>{`${aggregatePaymentDetails.expiry.d7.amount}`}</Typography>
      </Grid>
    </Grid>
  );
};

export default ClaimsAggregate;
