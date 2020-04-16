import React from "react";
import Typography from "@material-ui/core/Typography";
import DaemonConfig from "../../../Components/DaemonConfig";
import AlertBox from "shared/dist/components/AlertBox";
import SNETButton from "shared/dist/components/SNETButton";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./styles";
import SNETTextfield from "shared/dist/components/SNETTextfield";

const ValidateConfig = props => {
  const { classes, daemonConfig, handleValidateConfig, testEndPoint, handleTestEndpointsChange, alert } = props;

  return (
    <div className={classes.validateConfigContainer}>
      <Typography variant="h6">Insert Testing Configuration File</Typography>
      <Typography className={classes.submitDescription}>
        In order for SingularityNET reviewers to test your service, you will need to update your configuration file with
        a <span>Testing Configuration File.</span> This allows only SingularityNET reviewers access to your service in a
        non-blockchain mode. After you insert the testing configuration file, please validate the endpoint to continue
        to submission process.
      </Typography>
      <SNETTextfield
        name="id"
        label="Public Daemon Endpoint"
        description="The public daemon enpoint that will be used for non-blockchain mode reviewing of service."
        value={testEndPoint}
        onChange={handleTestEndpointsChange}
      />
      <DaemonConfig config={daemonConfig} title="Test Configuration File" />
      <AlertBox type={alert.type} message={alert.message} children={alert.children} />
      <SNETButton children="validate endpoint" color="primary" variant="contained" onClick={handleValidateConfig} />
    </div>
  );
};

export default withStyles(useStyles)(ValidateConfig);
