import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import { useStyles } from "./styles";
import InfoIcon from "@material-ui/icons/Info";
import { cogsToAgi } from "shared/dist/utils/Pricing";
import { Networks } from "shared/dist/constants/networks";

const AccountDetails = ({ classes, mmAccDetails }) => {
  const [showExtraInfo, setShowExtraInfo] = useState(false);
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} className={classes.box}>
      <div className={classes.headerAccountDetails} onClick={() => setShowExtraInfo(!showExtraInfo)}>
        <Typography variant="h6">Claims</Typography>
        <div>{showExtraInfo ? <ExpandLessIcon /> : <ExpandMoreIcon />}</div>
      </div>
      <Grid container xs={12} sm={12} md={12} lg={12}>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <InfoIcon />
          <Typography>Wallet</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Typography>Metamask</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <InfoIcon />
          <Typography>Total tokens</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Typography>{cogsToAgi(mmAccDetails.escrowBalance)} AGI</Typography>
        </Grid>
      </Grid>
      <Collapse in={showExtraInfo} timeout="auto" unmountOnExit>
        <Grid container xs={12} sm={12} md={12} lg={12}>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <InfoIcon />
            <Typography>Current Network</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography>{Networks[process.env.REACT_APP_ETH_NETWORK]}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <InfoIcon />
            <Typography>Account Balance</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography>{cogsToAgi(mmAccDetails.tokenBalance)} AGI</Typography>
          </Grid>
        </Grid>
      </Collapse>
    </Grid>
  );
};

export default withStyles(useStyles)(AccountDetails);
