import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import SNETButton from "shared/dist/components/SNETButton";

import Revenue from "./Revenue";
import Usage from "./Usage";
import Pricing from "./Pricing";
import Changelog from "./Changelog";
import { useStyles } from "./styles";

const tabs = [
  { name: "Revenue", activeIndex: 0, component: <Revenue /> },
  { name: "Usage", activeIndex: 1, component: <Usage /> },
  { name: "Pricing", activeIndex: 2, component: <Pricing /> },
  { name: "Changelog", activeIndex: 3, component: <Changelog /> },
];

const ServiceStatusDetails = props => {
  const { classes } = props;
  const [activeTab, setActiveTab] = useState(0);

  const onTabChange = activeTab => {
    setActiveTab({ activeTab });
  };

  const activeComponent = tabs.find(el => el.activeIndex === activeTab);

  return (
    <div className={classes.serviceStatusDetailsMainContainer}>
      <div>
        <div className={classes.statusDetails}>
          <Typography className={classes.property}>status</Typography>
          <Typography className={classes.value}>active</Typography>
        </div>
        <div className={classes.tabsContainer}>
          <AppBar position="static" className={classes.tabsHeader}>
            <Tabs value={activeTab}>
              {tabs.map(value => (
                <Tab key={value.name} label={value.name} onClick={() => onTabChange(value.activeIndex)} />
              ))}
            </Tabs>
          </AppBar>
          {activeComponent && activeComponent.component}
        </div>
      </div>
      <div className={classes.serviceStatusActions}>
        <SNETButton children="edit" color="primary" variant="contained" />
        <SNETButton children="pause service" color="primary" variant="contained" />
      </div>
    </div>
  );
};
export default withStyles(useStyles)(ServiceStatusDetails);
