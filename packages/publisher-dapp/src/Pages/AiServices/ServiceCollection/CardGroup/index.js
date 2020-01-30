import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector } from "react-redux";

import { useStyles } from "./styles";
import GridViewItem from "./GridViewItem";
import ServiceStatusDetails from "./ServiceStatusDetails";

const CardGroup = () => {
  const classes = useStyles();
  const { isLoading } = useSelector(state => state.loader.aiServiceList);
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

  return (
    <Grid container className={classes.gridViewCardCollection}>
      <Grid item xs={12} sm={12} md={3} lg={3} className={classes.serviceDetailCard}>
        <Link key="1" to="/" className={classes.routerLink}>
          <GridViewItem
            cardTitle="title"
            cardSubheader="sub header"
            ratingGiven="2"
            totalRating="5"
            cardDescription="description"
            isAvailable={isAvailable}
          />
        </Link>
      </Grid>
      <Grid item xs={12} sm={12} md={9} lg={9} className={classes.serviceStatusDetails}>
        <ServiceStatusDetails />
      </Grid>
    </Grid>
  );
};

export default CardGroup;
