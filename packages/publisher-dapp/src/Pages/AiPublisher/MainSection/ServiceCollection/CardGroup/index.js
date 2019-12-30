import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import truncate from "lodash/truncate";

import { useStyles } from "./styles";
import GridViewItem from "./GridViewItem";
import ServiceStatusDetails from "./ServiceStatusDetails";

const CardGroup = ({ loading }) => {
  const classes = useStyles();

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
      <Grid item lg={4}>
        <Link
          key="1"
          to="/"
          className={classes.routerLink}
        >
          <GridViewItem
            cardTitle="title"
            cardSubheader="sub header"
            ratingGiven="2"
            totalRating="5"
            cardDescription="description"
            isAvailable
          />
        </Link>
      </Grid>
      <Grid item lg={8}>
        <ServiceStatusDetails />
      </Grid>
    </Grid>
  );
};

export default CardGroup;
