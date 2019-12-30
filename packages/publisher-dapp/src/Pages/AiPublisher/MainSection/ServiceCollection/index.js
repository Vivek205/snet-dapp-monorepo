import React from "react";
import { withStyles } from "@material-ui/styles";

import ToolBar from "./ToolBar";
import CardGroup from "./CardGroup";
import StyledPagination from "./StyledPagination";
import { useStyles } from "./styles";

const ServiceCollection = ({ classes }) => {
  return (
    <div className={classes.serviceCollection}>
      <ToolBar />
      <CardGroup />
      <StyledPagination />
    </div>
  );
};

export default withStyles(useStyles)(ServiceCollection);
