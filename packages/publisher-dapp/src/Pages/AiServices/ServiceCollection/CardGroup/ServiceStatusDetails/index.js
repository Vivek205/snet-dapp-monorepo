import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

import SNETButton from "shared/dist/components/SNETButton";

import Pricing from "./Pricing";
import { useStyles } from "./styles";
import { ConfigurationServiceRequest } from "../../../../../Utils/Daemon/ConfigurationService";

const ServiceStatusDetails = props => {
  const { classes, status, groups, editServiceLink } = props;
  const [activeTab] = useState(2);

  const tabs = [{ name: "Pricing", activeIndex: 2, component: <Pricing groups={groups} /> }];
  /*
  const tabs = [
    { name: "Revenue", activeIndex: 0, component: <Revenue /> },
    { name: "Usage", activeIndex: 1, component: <Usage /> },
    { name: "Pricing", activeIndex: 2, component: <Pricing groups={groups} /> },
    { name: "Changelog", activeIndex: 3, component: <Changelog /> },
  ];*/

  const activeComponent = tabs.find(el => el.activeIndex === activeTab);

  // TODO use the appropriate endpoint of the service's daemon
  const validateDaemonConfig = async (serviceEndpoint = "https://example-service-a.singularitynet.io:8083") => {
    const configurationServiceRequest = new ConfigurationServiceRequest(serviceEndpoint);
    await configurationServiceRequest.getConfiguration();
  };

  return (
    <div className={classes.serviceStatusDetailsMainContainer}>
      <div>
        <div className={classes.statusDetails}>
          <Typography className={classes.property}>status</Typography>
          <Typography className={classes.value}>{status}</Typography>
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
      <div className={classes.serviceStatusActions}>
        <Link to={editServiceLink}>
          <SNETButton children="edit" color="primary" variant="contained" />
        </Link>
        <SNETButton children="pause service" color="primary" variant="contained" />
        <SNETButton children="validate daemon" color="primary" variant="contained" onClick={validateDaemonConfig} />
      </div>
    </div>
  );
};
export default withStyles(useStyles)(ServiceStatusDetails);
