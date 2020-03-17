import React, { useState } from "react";
import isEmpty from "lodash/isEmpty";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { useStyles } from "./styles";
import SNETButton from "shared/dist/components/SNETButton";
import AlertText from "shared/dist/components/AlertText";
import { alertTypes } from "shared/dist/components/AlertBox";
import PrettyPrintJson from "shared/dist/components/PrettyPrintJSON";

let clearAlertTimeout;

const DaemonConfig = ({ config, classes, footerNote }) => {
  const [alert, setAlert] = useState({});
  if (isEmpty(config)) {
    return null;
  }

  const clearAlert = () => {
    clearTimeout(clearAlertTimeout);
    clearAlertTimeout = setTimeout(() => setAlert({}), 2000);
  };

  const handleCopyToClipboard = () => {
    setAlert({ type: alertTypes.SUCCESS, message: "Config has been copied to clipboard" });
    clearAlert();
  };

  return (
    <Grid Item>
      <Typography variant="h6" className={classes.configTitle}>
        Sample Daemon config
      </Typography>
      <PrettyPrintJson data={config} />
      <CopyToClipboard text={JSON.stringify(config)} onCopy={handleCopyToClipboard}>
        <SNETButton color="primary" variant="text" children="copy config to clipboard" />
      </CopyToClipboard>
      <AlertText type={alert.type} message={alert.message} />
      <p>{footerNote}</p>
    </Grid>
  );
};

export default withStyles(useStyles)(DaemonConfig);
