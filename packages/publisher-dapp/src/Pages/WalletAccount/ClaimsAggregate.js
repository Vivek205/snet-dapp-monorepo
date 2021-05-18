import React from "react";
import Grid from "@material-ui/core/Grid";
import InfoIcon from "@material-ui/icons/Info";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import { useStyles } from "./styles";
import { cogsToAgi } from "shared/dist/utils/Pricing";

const ClaimsAggregate = ({ classes, aggregatePaymentDetails }) => {
  return (
    <Grid container xs={12} sm={12} md={12} lg={12} className={classes.claimsAggregateContainer}>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <div className={classes.iconContainer}>
          <InfoIcon className={classes.infoIcon} />
          <Typography>Pending</Typography>
        </div>
        <Typography>
          {cogsToAgi(aggregatePaymentDetails.amount.toString())}
          <span>AGIX</span>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <div className={classes.iconContainer}>
          <InfoIcon className={classes.infoIcon} />
          <Typography>Expiring count</Typography>
        </div>
        <Typography>
          {aggregatePaymentDetails.expiry.d7.count}
          <span>Claims</span>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <div className={classes.iconContainer}>
          <InfoIcon className={classes.infoIcon} />
          <Typography>Expiring Amount</Typography>
        </div>
        <Typography>
          {cogsToAgi(aggregatePaymentDetails.expiry.d7.amount.toString())}
          <span>AGIX</span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(ClaimsAggregate);
