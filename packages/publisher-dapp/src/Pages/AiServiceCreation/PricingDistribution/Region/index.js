import React, { useState, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InfoIcon from "@material-ui/icons/Info";
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import { useSelector, useDispatch } from "react-redux";

import { useStyles } from "./styles";
import StyledDropdown from "shared/dist/components/StyledDropdown";
import SNETTextfield from "shared/dist/components/SNETTextfield";
import SNETButton from "shared/dist/components/SNETButton";
import { keyCodes } from "shared/dist/utils/keyCodes";
import { aiServiceDetailsActions } from "../../../../Services/Redux/actionCreators";

const Region = () => {
  const classes = useStyles();
  const [showRegion] = useState(true);
  const { price, freeCallsAllowed, endpoints } = useSelector(state => state.aiServiceDetails);
  const endpointRef = useRef(null);
  const dispatch = useDispatch();

  const handleNewEndpointsChange = event => {
    if (event.keyCode !== keyCodes.enter) {
      return;
    }
    const newEndpoints = endpointRef.current.value;
    const updatedEndpoints = [...endpoints];
    const userInputEndpoints = newEndpoints.split(",");
    userInputEndpoints.forEach(endpoint => {
      endpoint = endpoint.replace(/\s/g, "");
      if (endpoint) {
        const index = updatedEndpoints.findIndex(el => el === endpoint);
        if (index === -1) {
          updatedEndpoints.push(endpoint);
        }
      }
    });
    dispatch(aiServiceDetailsActions.setAiServiceEndpoints(updatedEndpoints));
    endpointRef.current.value = "";
  };

  const handleEndpointDelete = endpoint => {
    const index = endpoints.findIndex(el => el === endpoint);
    const updatedEndpoints = [...endpoints];
    updatedEndpoints.splice(index, 1);
    dispatch(aiServiceDetailsActions.setAiServiceEndpoints(updatedEndpoints));
  };

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
                value={price}
                label="Ai Service Price"
              />
              AGI
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
              value={freeCallsAllowed}
              // TODO value
              // TODO onChange
              label="Demo Free Calls"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <SNETTextfield
              icon
              name="daemonEndPoints"
              inputRef={endpointRef}
              onKeyUp={handleNewEndpointsChange}
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
                {endpoints.map(endpoint => (
                  <Chip
                    className={classes.chip}
                    key={endpoint}
                    label={endpoint}
                    color="primary"
                    onDelete={() => handleEndpointDelete(endpoint)}
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
