import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/styles";

import SNETButton from "shared/dist/components/SNETButton";
import { useStyles } from "./styles";

const StatusBanner = ({ classes, title, description, CTA }) => {
  return (
    <Grid container spacing={24} className={classes.statusBannerContainer}>
      <Grid item xs={12} sm={3} md={3} lg={3} className={classes.statusBannerMedia}>
        <img src="http://placehold.it/302x242" alt="Media" />
      </Grid>
      <Grid item xs={12} sm={9} md={9} lg={9} className={classes.statusBannerContent}>
        <Typography variant="h6">{title}</Typography>
        <Typography>{description}</Typography>
        {CTA.map((item, index) => (
          <SNETButton children={item.label} variant={item.variant} color={item.color} />
        ))}        
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(StatusBanner);
