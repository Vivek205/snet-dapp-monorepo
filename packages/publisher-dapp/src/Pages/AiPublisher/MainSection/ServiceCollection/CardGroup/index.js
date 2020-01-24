import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useStyles } from "./styles";
import GridViewItem from "./GridViewItem";
import ServiceStatusDetails from "./ServiceStatusDetails";

const CardGroup = ({ loading }) => {
  const classes = useStyles();
  const [isAvailable] = useState(true);

  if (loading) {
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
      <Grid item xs={12} sm={12} md={4} lg={4}>
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
      <Grid item xs={12} sm={12} md={8} lg={8}>
        <ServiceStatusDetails />
      </Grid>
    </Grid>
  );
};

export default CardGroup;
