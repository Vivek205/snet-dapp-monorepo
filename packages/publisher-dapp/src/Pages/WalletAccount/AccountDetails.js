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
        <Typography variant="h6">Account Balance</Typography>
        <div>{showExtraInfo ? <ExpandLessIcon /> : <ExpandMoreIcon />}</div>
      </div>
      <div className={classes.wrapper}>
        <Grid container xs={12} sm={12} md={12} lg={12}>
          <Grid item xs={12} sm={12} md={3} lg={3} className={classes.iconContainer}>
            <InfoIcon className={classes.infoIcon} />
            <Typography>Wallet</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} className={classes.valueContainer}>
            <Typography className={classes.value}>Metamask</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} className={classes.iconContainer}>
            <InfoIcon className={classes.infoIcon} />
            <Typography>Total tokens</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography className={classes.boxValue}>
              {cogsToAgi(mmAccDetails.escrowBalance)} <span>AGIX</span>
            </Typography>
          </Grid>
        </Grid>
        <Collapse in={showExtraInfo} timeout="auto" unmountOnExit className={classes.collapseContainer}>
          <Grid container xs={12} sm={12} md={12} lg={12}>
            <Grid item xs={12} sm={12} md={3} lg={3} className={classes.iconContainer}>
              <InfoIcon className={classes.infoIcon} />
              <Typography>Current Network</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} className={classes.valueContainer}>
              <Typography className={classes.value}>{Networks[process.env.REACT_APP_ETH_NETWORK]}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} className={classes.iconContainer}>
              <InfoIcon className={classes.infoIcon} />
              <Typography>Account Balance</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Typography className={classes.boxValue}>
                {cogsToAgi(mmAccDetails.tokenBalance)} <span>AGIX</span>
              </Typography>
            </Grid>
          </Grid>
        </Collapse>
      </div>
    </Grid>
  );
};

export default withStyles(useStyles)(AccountDetails);
