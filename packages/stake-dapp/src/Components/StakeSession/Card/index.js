import React from "react";

import Typography from "@material-ui/core/Typography";
import InfoIcon from "@material-ui/icons/Info";

import { useStyles } from "./styles";

const Card = ({ title, value, unit, toolTip }) => {
  const classes = useStyles();

  return (
    <div className={classes.CardContainer}>
      <div className={classes.iconTooltipContainer}>
        <div className={classes.toolTipContainer}>
          <InfoIcon />
          <Typography>{toolTip}</Typography>
        </div>
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
