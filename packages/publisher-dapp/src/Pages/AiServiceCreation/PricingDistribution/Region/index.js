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
  const { groups } = useSelector(state => state.aiServiceDetails);
  const endpointRef = useRef(null);
  const dispatch = useDispatch();

  const selectedGroup = groups[0];
  const selectedPricing = selectedGroup.pricing ? selectedGroup.pricing[0] : {};

  const handleNewEndpointsChange = event => {
    if (event.keyCode !== keyCodes.enter) {
      return;
    }
    const newEndpoints = endpointRef.current.value;
    const updatedEndpoints = [...selectedGroup.endpoints];
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
    const updatedGroups = [...groups];
    updatedGroups[0] = { ...selectedGroup, endpoints: updatedEndpoints };
    dispatch(aiServiceDetailsActions.setAiServiceGroups(updatedGroups));
    endpointRef.current.value = "";
  };

  const handleEndpointDelete = endpoint => {
    const index = selectedGroup.endpoints.findIndex(el => el === endpoint);
    const updatedEndpoints = [...selectedGroup.endpoints];
    updatedEndpoints.splice(index, 1);
    const updatedGroups = [...groups];
    updatedGroups[0] = { ...selectedGroup, endpoints: updatedEndpoints };
    dispatch(aiServiceDetailsActions.setAiServiceGroups(updatedGroups));
  };

  const handleFreeCallsChange = event => {
    const { value } = event.target;
    const updatedGroups = [...groups];
    updatedGroups[0] = { ...selectedGroup, freeCallsAllowed: value };
    dispatch(aiServiceDetailsActions.setAiServiceGroups(updatedGroups));
    // dispatch(aiServiceDetailsActions.setAiServiceDetailLeaf(name, value));
  };

  const handlePriceChange = event => {
    const { value } = event.target;
    const updatedPricing = { ...selectedPricing, price: value };
    const updatedGroups = [...groups];
    updatedGroups[0] = { ...selectedGroup, pricing: updatedPricing };
  };

  if (showRegion) {
    return (
      <div>
        <div className={classes.dropDownBtn}>
          <StyledDropdown
            name="default_group"
            value="default_group"
            list={[{ value: "default_group", label: "default_group" }]}
          />
        </div>
        <Grid container className={classes.grayBox}>
          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.regionNameIdContainer}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography className={classes.header}>Region Name</Typography>
              <Typography className={classes.value}>North America</Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.servicePriceModelContainer}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <SNETTextfield
                icon
                name="price"
                value={selectedPricing && selectedPricing.price}
                label="Ai Service Price"
                onChange={handlePriceChange}
              />
              AGI
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <StyledDropdown
                inputLabel="Entity Type"
                value={selectedPricing && selectedPricing.priceModel}
                list={[{ value: "fixed_price", label: "fixed_price" }]}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <SNETTextfield
              icon
              name="freeCallsAllowed"
              value={selectedGroup.freeCallsAllowed}
              label="Demo Free Calls"
              onChange={handleFreeCallsChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <SNETTextfield
              icon
              name="endpoints"
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
                {selectedGroup.endpoints &&
                  selectedGroup.endpoints.map(endpoint => (
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
