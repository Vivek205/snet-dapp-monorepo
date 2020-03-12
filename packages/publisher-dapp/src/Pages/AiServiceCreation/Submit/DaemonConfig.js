import React from "react";
import isEmpty from "lodash/isEmpty";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import JSONtoUl from "shared/dist/components/JSONtoUl";

const DaemonConfig = ({ config }) => {
  if (isEmpty(config)) {
    return null;
  }

  return (
    <Grid Item>
      <Typography variant="h4">Sample Daemon config</Typography> {JSONtoUl(config)}
    </Grid>
  );
};

export default DaemonConfig;
