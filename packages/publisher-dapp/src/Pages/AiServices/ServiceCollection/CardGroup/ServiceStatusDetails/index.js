import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import isEmpty from "lodash/isEmpty";
import WarningIcon from "@material-ui/icons/Warning";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import SNETButton from "shared/dist/components/SNETButton";

import Pricing from "./Pricing";
import { useStyles } from "./styles";
import { ConfigurationServiceRequest } from "../../../../../Utils/Daemon/ConfigurationService";
import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";
import { aiServiceDetailsActions } from "../../../../../Services/Redux/actionCreators";
import { checkIfKnownError } from "shared/dist/utils/error";
import { generateDetailedErrorMessageFromValidation } from "./MultiDaemonValidation";
import { serviceCreationStatus } from "../../../../AiServiceCreation/constant";
import { ServiceCreationRoutes } from "../../../../AiServiceCreation/ServiceCreationRouter/Routes";

const selectState = state => ({
  serviceDetails: state.aiServiceList,
});
const ServiceStatusDetails = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { classes, status, groups, serviceUuid, orgUuid, orgId, serviceId } = props;
  const [activeTab] = useState(2);
  const { serviceDetails } = useSelector(selectState);
  const [alert, setAlert] = useState({});
  const [verifyDaemonAlert, setVerifyDaemonAlert] = useState({
    type: alertTypes.WARNING,
    message: "The test will ensure the protocols are working correctly. No ETH 'gas' transaction fee will incur",
    header: "Verify This Service",
    icon: WarningIcon,
  });
  const Networks = {
    1: "main",
    3: "ropsten",
  };
  const configValidation = [
    ["blockchain_enabled", "true"],
    ["ipfs_end_point", "http://ipfs.singularitynet.io:80"],
    ["blockchain_network_selected", Networks[process.env.REACT_APP_ETH_NETWORK]],
    ["passthrough_enabled", "true"],
    ["organization_id", orgId],
    ["service_id", serviceId],
  ];
  /*
  const tabs = [
    { name: "Revenue", activeIndex: 0, component: <Revenue /> },
    { name: "Usage", activeIndex: 1, component: <Usage /> },
    { name: "Pricing", activeIndex: 2, component: <Pricing groups={groups} /> },
    { name: "Changelog", activeIndex: 3, component: <Changelog /> },
  ];
*/
  const tabs = [{ name: "Pricing", activeIndex: 2, component: <Pricing groups={groups} /> }];
  const activeComponent = tabs.find(el => el.activeIndex === activeTab);
  const validateDaemonConfig = () => {
    setVerifyDaemonAlert({ type: alertTypes.WARNING, message: "" });
    const result = serviceDetails.data.filter(({ uuid }) => serviceUuid === uuid);
    let DaemonConfigvalidateAlert = [];
    let errorMessage = [];
    let multiErrors = [];
    try {
      let signature = "";
      let currentBlock;
      result[0].groups.forEach(async group => {
        const entries = Object.entries(group.endpoints);
        for (let index = 0; index < entries.length; index++) {
          const entry = entries[index];
          const [endpoint, value] = entry;
          if (value.valid) {
            continue;
          }
          const configurationServiceRequest = new ConfigurationServiceRequest(endpoint);
          if (!signature) {
            currentBlock = await configurationServiceRequest.getCurrentBlockNumber();
            signature = await configurationServiceRequest.generateSignatureForGetConfiguration(currentBlock);
          }
          try {
            const res = await configurationServiceRequest.getConfiguration(signature, currentBlock);
            res.currentConfigurationMap.forEach(element => {
              configValidation.forEach(element1 => {
                if (element[0] === element1[0]) {
                  if (element[1] !== element1[1]) {
                    if (!DaemonConfigvalidateAlert.includes(element1[0] + " should be " + element1[1]))
                      DaemonConfigvalidateAlert.push(element1[0] + " should be " + element1[1]);
                  }
                }
              });
            });
            errorMessage = generateDetailedErrorMessageFromValidation(endpoint, DaemonConfigvalidateAlert);
            multiErrors.push(errorMessage);
          } catch (error) {
            multiErrors.push(endpoint + " is not a valid endpoint ");
            if (isEmpty(DaemonConfigvalidateAlert)) {
              DaemonConfigvalidateAlert.push(endpoint + " is not a valid endpoint ");
              errorMessage = generateDetailedErrorMessageFromValidation(null, DaemonConfigvalidateAlert);
              setAlert({ type: alertTypes.ERROR, children: errorMessage });
            }
          }
        }
        if (isEmpty(DaemonConfigvalidateAlert)) {
          setVerifyDaemonAlert({
            type: alertTypes.SUCCESS,
            message: "All protocols tested positive",
            header: "Verification Sucessful",
            icon: CheckCircleIcon,
          });
          await dispatch(
            aiServiceDetailsActions.submitServiceDetailsForReview(result[0].orgUuid, serviceUuid, result[0], true)
          );
        } else {
          setAlert({ type: alertTypes.ERROR, children: multiErrors });
        }
      });
    } catch (error) {
      if (checkIfKnownError) {
        return setAlert({ type: alertTypes.ERROR, message: error.message });
      }

      return setAlert({ type: alertTypes.ERROR, message: "something went wrong" });
    }
  };

  const handleEdit = () => {
    const path =
      status === serviceCreationStatus.APPROVED
        ? ServiceCreationRoutes.SUBMIT.path
        : ServiceCreationRoutes.PROFILE.path;
    const redirectTo = path.replace(":orgUuid", orgUuid).replace(":serviceUuid", serviceUuid);
    history.push(redirectTo);
  };

  return (
    <div className={classes.serviceStatusDetailsMainContainer}>
      <div>
        <div className={classes.statusDetails}>
          <Typography className={classes.property}>status</Typography>
          <Typography data-status-type={status} className={classes.value}>
            {status}
          </Typography>
        </div>
        <div className={classes.tabsContainer}>
          <AppBar position="static" className={classes.tabsHeader}>
            <Tabs value={activeTab}>
              {tabs.map(value => (
                <Tab key={value.name} label={value.name} />
              ))}
            </Tabs>
          </AppBar>
          {activeComponent && activeComponent.component}
        </div>
      </div>

      {props.status === "PUBLISHED" && (
        <AlertBox
          type={verifyDaemonAlert.type}
          message={verifyDaemonAlert.message}
          header={verifyDaemonAlert.header}
          icon={verifyDaemonAlert.icon}
        />
      )}

      <div className={classes.serviceStatusActions}>
        <SNETButton
          children={status === serviceCreationStatus.APPROVED ? "publish" : "edit"}
          color="primary"
          variant="contained"
          onClick={handleEdit}
          disabled={status === serviceCreationStatus.REJECTED}
        />

        {props.status === "PUBLISHED" ? (
          <div className={classes.configValidButton}>
            <SNETButton children="validate daemon" color="primary" variant="contained" onClick={validateDaemonConfig} />
          </div>
        ) : null}
      </div>
      <br />
      <div>
        <AlertBox type={alert.type} message={alert.message} children={alert.children} />
      </div>
    </div>
  );
};
export default withStyles(useStyles)(ServiceStatusDetails);
