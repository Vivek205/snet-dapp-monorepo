import React from "react";
import { withStyles } from "@material-ui/styles";

import ToolBar from "./ToolBar";
import CardGroup from "./CardGroup";
import SNETPagination from "shared/dist/components/SNETPagination";
import { useStyles } from "./styles";

const ServiceCollection = ({ classes }) => {
  return (
    <div className={classes.serviceCollection}>
      <ToolBar />
      <CardGroup />
      <SNETPagination />
    </div>
  );
};

export default withStyles(useStyles)(ServiceCollection);
