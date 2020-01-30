import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector } from "react-redux";
import isEmpty from "lodash/isEmpty";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles";
import GridViewItem from "./GridViewItem";
import ServiceStatusDetails from "./ServiceStatusDetails";

const CardGroup = () => {
  const classes = useStyles();
  const { isLoading, serviceList } = useSelector(state => ({
    isLoading: state.loader.aiServiceList.isLoading,
    serviceList: state.aiServiceList.data,
  }));
  const [isAvailable] = useState(true);

  if (isLoading) {
    return (
      <div className={classes.circularProgressContainer}>
        <div className={classes.loaderChild}>
          <CircularProgress className={classes.circularProgress} />
          <p className={classes.loaderText}>LOADING AI..</p>
        </div>
      </div>
    );
  }

  if (isEmpty) {
    return <Typography>No services found</Typography>;
  }

  return serviceList.map(service => (
    <Grid container className={classes.gridViewCardCollection} key={service.uuid}>
      <Grid item xs={12} sm={12} md={3} lg={3} className={classes.serviceDetailCard}>
        <Link key="1" to="/" className={classes.routerLink}>
          <GridViewItem
            cardTitle={service.displayName}
            cardSubheader="sub header"
            ratingGiven={service.serviceRating.rating}
            totalRating={service.serviceRating.totalUsersRated}
            cardDescription={service.shortDescription}
            isAvailable={isAvailable}
          />
        </Link>
      </Grid>
      <Grid item xs={12} sm={12} md={9} lg={9} className={classes.serviceStatusDetails}>
        <ServiceStatusDetails />
      </Grid>
    </Grid>
  ));
};

export default CardGroup;
