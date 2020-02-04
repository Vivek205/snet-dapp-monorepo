import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InfoIcon from "@material-ui/icons/Info";
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";

import { useStyles } from "./styles";
import StyledDropdown from "shared/dist/components/StyledDropdown";
import SNETTextfield from "shared/dist/components/SNETTextfield";
import SNETButton from "shared/dist/components/SNETButton";

const Region = () => {
  const classes = useStyles();
  const [showRegion] = useState(true);

  if (showRegion) {
    return (
      <div>
        <div className={classes.dropDownBtn}>
          <StyledDropdown name="id" labelTxt="Groups / Region" list={[{ value: "name", label: "name" }]} />
          <SNETButton children="add" color="primary" variant="outlined" />
        </div>
        <Grid container className={classes.grayBox}>
          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.regionNameIdContainer}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography className={classes.header}>Region Name</Typography>
              <Typography className={classes.value}>North America</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography className={classes.header}>Region ID</Typography>
              <Typography className={classes.value}>US-2651-DC</Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.servicePriceModelContainer}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <SNETTextfield
                icon
                name="aiServicePrice"
                // TODO value
                // TODO onChange
                label="Ai Service Price"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <SNETTextfield
                name="priceModel"
                // TODO value
                // TODO onChange
                label="Price Model"
              />
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <SNETTextfield
              icon
              name="demoFreeCalls"
              // TODO value
              // TODO onChange
              label="Demo Free Calls"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <SNETTextfield
              icon
              name="daemonEndPoints"
              // TODO value
              // TODO onChange
              label="Daemon Endpoints"
              description="Enter all the public Daemon end points that will be used to call the service."
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.addedEndpointsContainer}>
            <div className={classes.infoIconContainer}>
              <InfoIcon />
            </div>
            <div className={classes.cardContainer}>
              <span className={classes.label}>Added Endpoints</span>
              <Card className={classes.card}>
                {[1, 2, 3].map(endpoint => (
                  <Chip
                    className={classes.chip}
                    key={endpoint}
                    label={endpoint}
                    color="primary"
                    // TODO  onDelete
                  />
                ))}
              </Card>
              <span className={classes.extraInfo}>You can add up to 20 endpoints</span>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.btnContainer}>
            <SNETButton children="remove region details" color="red" variant="text" />
          </Grid>
        </Grid>
      </div>
    );
  }

  return (
    <div className={classes.addRegionBtn}>
      <SNETButton
        children="No region selected. Add atleast one region to continue."
        color="primary"
        variant="contained"
        disabled
      />
    </div>
  );
};

export default Region;
