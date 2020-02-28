import React from "react";

import Typography from "@material-ui/core/Typography";
import InfoIcon from "@material-ui/icons/Info";

import { useStyles } from "./styles";

const Card = ({ title, value, unit }) => {
  const classes = useStyles();

  return (
    <div className={classes.CardContainer}>
      <div>
        <InfoIcon />
        <Typography className={classes.title}>{title}</Typography>
      </div>
      <div>
        <Typography className={classes.value}>{value}</Typography>
        <Typography className={classes.unit}>{unit}</Typography>
      </div>
    </div>
  );
};

export default Card;
