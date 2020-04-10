import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import SNETButton from "shared/dist/components/SNETButton";

import { useStyles } from "./styles";

const HowItWorks = ({ classes, rightAlign, icon, title, description, btnTitle }) => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      className={`${classes.workingContentContainer} ${rightAlign ? classes.reverseDirection : null}`}
    >
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <img src={icon} alt={title} />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} className={classes.textContent}>
        <Typography className={classes.workingTitle}>{title}</Typography>
        <Typography className={classes.workingDesc}>{description}</Typography>
        <SNETButton color="primary" variant="text" children={btnTitle} />
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(HowItWorks);
