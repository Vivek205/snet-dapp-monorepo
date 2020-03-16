import React from "react";
import isEmpty from "lodash/isEmpty";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";

import JSONtoUl from "shared/dist/components/JSONtoUl";
import { useStyles } from "./styles";

const DaemonConfig = ({ config, classes, footerNote }) => {
  if (isEmpty(config)) {
    return null;
  }

  return (
    <Grid Item>
      <Typography variant="h6" className={classes.configTitle}>
        Sample Daemon config
      </Typography>
      <div className={classes.configList}>{JSONtoUl(config)}</div>
      <p>{footerNote}</p>
    </Grid>
  );
};

export default withStyles(useStyles)(DaemonConfig);
