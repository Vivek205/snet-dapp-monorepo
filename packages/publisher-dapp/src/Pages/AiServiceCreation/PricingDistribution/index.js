import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles";
import Region from "./Region";

const PricingDistribution = ({ location }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
        <Typography variant="h6">Pricing distribution</Typography>
        <div className={classes.wrapper}>
          <Typography className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur et mihi. Accusatores directam qui ut accusatoris. Communiter
            videbatur hominum vitam ut qui eiusdem fore accommodatior maximis vetere communitatemque.
          </Typography>
          <Region />
        </div>
      </Grid>
    </Grid>
  );
};
export default PricingDistribution;
