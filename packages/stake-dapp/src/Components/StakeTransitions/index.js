import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";

//import SNETPagination from "shared/dist/components/SNETPagination";

import { useStyles } from "./styles";
import TableRow from "./TableRow";
import ExpandedTable from "./ExpandedTable";
//import { itemsPerPageOptions } from "./content";

const StakeTransitions = () => {
  const classes = useStyles();
  const [expandTable, setExpandTable] = useState(false);

  const handleExpandeTable = () => {
    setExpandTable(!expandTable);
  };

  return (
    <div className={classes.stakeTransactionContainer}>
      <div className={classes.header}>
        <Typography variant="h6">Transaction History</Typography>
      </div>
      <Typography className={classes.pageTitle}>Stake Session</Typography>
      <div className={classes.table}>
        <TableRow expandTable={expandTable} handleExpandeTable={handleExpandeTable} />
        <ExpandedTable showTable={expandTable} />
      </div>
      {/* <div className={classes.pagination}>
        <SNETPagination
          itemsPerPageOptions={itemsPerPageOptions}
          itemsPerPage="50"
          onItemsPerPageChange="0"
          limit="4"
          offset="1"
          totalCount="100"
        />
      </div> */}
    </div>
  );
};

export default StakeTransitions;
