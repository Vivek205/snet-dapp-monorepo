import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InfoIcon from "@material-ui/icons/Info";
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";

import { useStyles } from "./styles";
import StyledDropdown from "shared/dist/components/StyledDropdown";
import SNETTextfield from "shared/dist/components/SNETTextfield";

const Region = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.dropDownBtn}>
        <StyledDropdown name="id" labelTxt="Groups / Region" list={[{ value: "name", label: "name" }]} />
      </div>
      <Grid container className={classes.grayBox}>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.regionNameIdContainer}>
          <div>
            <Typography className={classes.header}>Region Name</Typography>
            <Typography className={classes.value}>Group Name</Typography>
          </div>
        </Grid>
        <Grid container>
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
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.cardContainer}>
          <div className={classes.infoIconContainer}>
            <InfoIcon />
          </div>
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
        </Grid>
      </Grid>
    </div>
  );
};

export default Region;
