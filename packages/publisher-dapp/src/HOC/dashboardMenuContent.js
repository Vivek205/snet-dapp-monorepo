import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import DescriptionIcon from "@material-ui/icons/Description";
import SettingIcon from "@material-ui/icons/Settings";

export const upperTabs = [
  {
    icon: <HomeIcon />,
    title: "My AI Apps",
  },
  /*{
    icon: <ShowChartIcon />,
    title: "App Analytics",
  },
  {
    icon: <AttachMoneyIcon />,
    title: "Sales & Trends",
  },*/
  {
    icon: <GroupIcon />,
    title: "Teams & Access",
  },
  /*{
    icon: <DashboardIcon />,
    title: "Financial Reports",
  },*/
];

export const lowerTabs = [
  /*{
    icon: <AccountBalanceIcon />,
    title: "Wallet Account",
  },*/
  {
    icon: <DescriptionIcon />,
    title: "Dev Docs",
  },
  {
    icon: <SettingIcon />,
    title: "Settings",
  },
];
