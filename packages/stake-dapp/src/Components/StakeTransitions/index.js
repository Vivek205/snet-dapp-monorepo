import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
//import CircularProgress from "@material-ui/core/CircularProgress";
//import SNETPagination from "shared/dist/components/SNETPagination";

import { useStyles } from "./styles";
import TableRow from "./TableRow";
import ExpandedTable from "./ExpandedTable";
//import NoDataFoundImg from "shared/dist/assets/images/NoDataFound.png";
//import { itemsPerPageOptions } from "./content";
//import InlineLoader from "../InlineLoader";

const StakeTransitions = () => {
  const classes = useStyles();
  const [expandTable, setExpandTable] = useState(false);

  //const { isLoading } = useSelector(state => state.loader.txnList);

  const handleExpandeTable = () => {
    setExpandTable(!expandTable);
  };

  // if (isLoading) {
  //   return (
  //        <InlineLoader />
  //   );
  // }

  // if (txnStakes.length === 0) {
  //   return (
  //     <div className={classes.noDataFoundSection}>
  //       <img src={NoDataFoundImg} alt="No Data Found" />
  //       <Typography>You have no incubating stakes.</Typography>
  //       <Typography>
  //         Refer to <span>Open Staking</span> to make a stake.
  //       </Typography>
  //     </div>
  //   );
  // }

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
