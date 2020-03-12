import React, { useCallback } from "react";
import isEmpty from "lodash/isEmpty";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";

import JSONtoUl from "shared/dist/components/JSONtoUl";
import SNETButton from "shared/dist/components/SNETButton";
import { useStyles } from "./styles";

const downloadFileName = "DaemonConfig.json";

const DaemonConfig = ({ config, classes }) => {
  const downloadLink = useCallback(() => {
    const dataString = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(config));
    return dataString;
  }, [config]);

  if (isEmpty(config)) {
    return null;
  }

  return (
    <Grid Item>
      <Typography variant="h6" className={classes.configTitle}>
        Sample Daemon config
      </Typography>
      <div className={classes.configList}>{JSONtoUl(config)}</div>
      <SNETButton
        children="download config"
        href={downloadLink()}
        download={downloadFileName}
        color="primary"
        variant="text"
      />
    </Grid>
  );
};

export default withStyles(useStyles)(DaemonConfig);
