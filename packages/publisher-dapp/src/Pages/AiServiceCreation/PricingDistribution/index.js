import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles";
import Region from "./Region";
import UploadProto from "./UploadProto";
import AdvancedFields from "./AdvancedFields";
import Actions from "./Actions";
import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";

const PricingDistribution = () => {
  const classes = useStyles();
  const [alert] = useState({ type: alertTypes.ERROR, message: "Lorem ipsum" });

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
          <UploadProto />
          <AdvancedFields />
          <AlertBox type={alert.type} message={alert.message} />
        </div>
      </Grid>
      <Actions />
    </Grid>
  );
};
export default PricingDistribution;
