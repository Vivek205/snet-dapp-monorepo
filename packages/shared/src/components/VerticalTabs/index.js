import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import ToggleMenu from "./ToggleMenu";
import { useStyles } from "./styles";

const VerticalTabs = ({ upperTabs, lowerTabs }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <ToggleMenu classes={classes} isOpen={open} setIsOpen={setOpen} />
        <List className={classes.list}>
          {upperTabs.map((item, index) => (
            <ListItem button key={item.title} className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List className={classes.list}>
          {lowerTabs.map((item, index) => (
            <ListItem button key={item.title} className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default VerticalTabs;
