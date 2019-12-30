import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

import SNETButton from "shared/src/components/SNETButton";
import { useStyles } from "./styles";

const ServiceStatusDetails = ({ classes }) => {
  return (
  	<div className={classes.serviceStatusDetailsMainContainer}>
      <div className={classes.statusDetails}>
        <Typography className={classes.property}>status</Typography>
        <Typography className={classes.value}>active</Typography>
      </div>
      <div className={classes.priceAndPriceModel}>
        <div>
          <Typography className={classes.property}>Price</Typography>
          <Typography>0.00000001 AGI</Typography>
        </div>
        <div>
          <Typography className={classes.property}>Price Model</Typography>
          <Typography>Fixed Price Model</Typography>
        </div>
      </div>
      <div className={classes.usageActivity}>
        <div className={classes.usageActivityHeader}>
          <div>
            <Typography variant="h6">Usage Activity</Typography>
          </div>
          <div className={classes.usageDurationDetail}>
            <span>Duration</span>
          </div>
        </div>
        <div className={classes.usageActivityDetails}>
          <div>
            <span>Demo Calls</span>
            <span>0</span>
          </div>
          <div>
            <span>API Calls</span>
            <span>0</span>
          </div>
          <div>
            <span>Reviews</span>
            <span>0</span>
          </div>
          <div>
            <span>Metric 4</span>
            <span>0</span>
          </div>
        </div>
      </div>
      <div className={classes.usageActivityActions}>
        <div>
          <SNETButton children="edit" color="primary" variant="contained" />
          <SNETButton children="pause service" color="primary" variant="contained" />
        </div>
        <div>
          <SNETButton children="delete servcie" color="red" variant="contained" />
        </div>
      </div>
  	</div>
  )
};
export default withStyles(useStyles)(ServiceStatusDetails);
