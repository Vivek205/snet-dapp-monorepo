import React from "react";
import PropTypes from "prop-types";

import { useStyles } from "./styles";

const RatingsCount = ({ ratingGiven, totalRating }) => {
  const classes = useStyles();
  const parseRatingGiven = () => {
    if (!ratingGiven || isNaN(parseFloat(ratingGiven).toFixed(1))) {
      return null;
    }
    return ratingGiven;
  };
  return (
    <span className={classes.ratedCount}>
      {parseRatingGiven()} ({totalRating ? `${totalRating}` : 0})
    </span>
  );
};

RatingsCount.propTypes = {
  ratingGiven: PropTypes.number,
  totalRating: PropTypes.number,
};

export default RatingsCount;
