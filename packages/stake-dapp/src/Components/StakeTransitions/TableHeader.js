import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { useStyles } from "./styles";

const TableRow = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.tableHeaderContainer}>
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <Typography className={classes.tableHeader}>stake session</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <Typography className={classes.tableHeader}>stake</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Typography className={classes.tableHeader}>reward</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <Typography className={classes.tableHeader}>pool size</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Typography className={classes.tableHeader}>reward pool</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TableRow;
