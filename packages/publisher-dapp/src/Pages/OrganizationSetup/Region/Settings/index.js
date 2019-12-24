import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import InfoIcon from "@material-ui/icons/Info";

import { useStyles } from "./styles";
import AdvanceSettings from "./AdvanceSettings";
import SNETButton from "shared/dist/components/SNETButton";
import SNETTextfield from "shared/dist/components/SNETTextfield";
import StyledDropdown from "shared/dist/components/StyledDropdown";
import { useDispatch } from "react-redux";
import { organizationActions } from "../../../../Services/Redux/actionCreators";

const Settings = ({ classes, groups, group, groupIndex }) => {
  const dispatch = useDispatch();

  const { id, name, paymentAddress, paymentConfig } = group;

  const handlePaymentAddressChange = event => {
    const { value } = event.target;
    const updatedGroups = [...groups];
    updatedGroups[groupIndex] = { ...groups[groupIndex], paymentAddress: value };
    dispatch(organizationActions.setGroups(updatedGroups));
  };

  return (
    <div className={classes.settingsContainer}>
      <div className={classes.dropDownBtn}>
        <StyledDropdown name="id" value={id} labelTxt="Groups / Region" list={[{ value: id, label: name }]} />
        <SNETButton color="primary" variant="outlined" children="add" />
      </div>
      <Typography variant="subtitle1">Groups / Region Settings</Typography>
      <div className={classes.grayBoxContainer}>
        <Grid container className={classes.grayBox}>
          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.regionNameIdContainer}>
            <div>
              <Typography className={classes.header}>Region Name</Typography>
              <Typography className={classes.value}>{name}</Typography>
            </div>
            <div>
              <Typography className={classes.header}>Region ID</Typography>
              <Typography className={classes.value}>{id}</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <SNETTextfield
              icon
              name="paymentAddress"
              value={paymentAddress}
              onChange={handlePaymentAddressChange}
              label="Payment Address"
              description="The Metamask address associated with this region."
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <SNETTextfield
              icon
              name="id"
              value=" "
              label="ETCD Endpoint"
              description="Enter all the ETCD end points that will be used."
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.cardContainer}>
            <div className={classes.infoIconContainer}>
              <InfoIcon />
            </div>
            <Card className={classes.card}>
              {paymentConfig.paymentChannelStorageClient.endpoints.map(endpoint => (
                <Chip className={classes.chip} key={endpoint} label={endpoint} color="primary" onDelete={() => console.log("deleted")} />
              ))}
            </Card>
          </Grid>
          <AdvanceSettings />
          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.btnContainer}>
            <SNETButton children="show advanced setting" variant="text" color="primary" />
            <SNETButton children="remove region" variant="text" color="red" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default withStyles(useStyles)(Settings);
