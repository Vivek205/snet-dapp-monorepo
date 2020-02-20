import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { useStyles } from "./styles";

const ExpandedTable = ({ showTable }) => {
  const classes = useStyles();
  if (showTable) {
    return (
      <Grid container className={classes.expandedTable}>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.expandedTableCol}>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Typography>Date</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography>Process State</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Typography>Status</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Typography>Transaction</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography>Detail</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.expandedTableRow}>
          <Grid item xs={12} sm={12} md={2} lg={2} className={classes.dateDetails}>
            <Typography className={classes.mobileTitle}>Date: </Typography>
            <Typography>10 Feb 2020</Typography>
            <Typography>02:32 AM EST</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography className={classes.mobileTitle}>Process State:</Typography>
            <Typography>Claims Withdraw</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Typography className={classes.mobileTitle}>Status:</Typography>
            <Typography>Success</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Typography className={classes.mobileTitle}>Transaction:</Typography>
            <Typography>-750 AGI</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography className={classes.mobileTitle}>Detail:</Typography>
            <Typography>Transfered to Metamask wallet</Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  return null;
};

export default ExpandedTable;
