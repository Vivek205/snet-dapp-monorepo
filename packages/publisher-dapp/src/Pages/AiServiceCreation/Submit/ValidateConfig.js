import React from "react";
import Typography from "@material-ui/core/Typography";
import DaemonConfig from "../../../Components/DaemonConfig";
import AlertBox from "shared/dist/components/AlertBox";
import SNETButton from "shared/dist/components/SNETButton";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./styles";
import SNETTextfield from "shared/dist/components/SNETTextfield";
import validator from "shared/dist/utils/validator";
import { submitServiceConstraints } from "./validationConstraints";

const ValidateConfig = props => {
  const {
    classes,
    daemonConfig,
    handleValidateConfig,
    testEndPoint,
    handleTestEndpointsChange,
    alert,
    testEndpointAlert,
  } = props;
  const shouldValidateDaemonEnabled = () => {
    const error = validator.single(testEndPoint, submitServiceConstraints.groups.array.testEndpoints);
    return Boolean(error);
  };

  return (
    <div className={classes.validateConfigContainer}>
      <Typography variant="h6">Insert Testing Configuration File</Typography>
      <Typography className={classes.submitDescription}>
        In order for SingularityNET reviewers to test your service, you will need to append your configuration file with
        a <span>Testing Configuration File.</span> This allows only SingularityNET reviewers access to your service in a
        non-blockchain mode. After you insert the testing configuration file, please validate the endpoint to continue
        to submission process.
      </Typography>
      <SNETTextfield
        name="id"
        label="Public curation Endpoint"
        description="The public curation endpoint that will be used for non-blockchain mode reviewing of service. This end point needs to be https"
        value={testEndPoint || ""}
        onChange={handleTestEndpointsChange}
      />
      <AlertBox
        type={testEndpointAlert.type}
        message={testEndpointAlert.message}
        children={testEndpointAlert.children}
      />
      <DaemonConfig config={daemonConfig} title="Test Configuration File" />
      <div className={classes.alertBoxContainer}>
        <AlertBox type={alert.type} message={alert.message} children={alert.children} />
      </div>
      <SNETButton
        children="validate endpoint"
        color="primary"
        variant="contained"
        onClick={handleValidateConfig}
        disabled={shouldValidateDaemonEnabled()}
      />
    </div>
  );
};

export default withStyles(useStyles)(ValidateConfig);
