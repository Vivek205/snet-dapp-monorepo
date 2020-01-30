import React from "react";
import { withStyles } from "@material-ui/styles";

import ToolBar from "./ToolBar";
import CardGroup from "./CardGroup";
import { itemsPerPageOptions, defaultPaginationParameters } from "./content";
import SNETPagination from "shared/dist/components/SNETPagination";
import { useStyles } from "./styles";

const ServiceCollection = ({ classes }) => {
  return (
    <div className={classes.serviceCollection}>
      <ToolBar />
      <CardGroup />
      <SNETPagination
        itemsPerPageOptions={itemsPerPageOptions}
        limit={defaultPaginationParameters.limit}
        offset={defaultPaginationParameters.offset}
        totalCount={defaultPaginationParameters.totalCount}
        from={defaultPaginationParameters.offset}
        to={parseFloat(defaultPaginationParameters.limit) + parseFloat(defaultPaginationParameters.offset)}
      />
    </div>
  );
};

export default withStyles(useStyles)(ServiceCollection);
