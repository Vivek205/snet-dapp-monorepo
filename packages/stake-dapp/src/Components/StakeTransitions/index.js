import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Typography from "@material-ui/core/Typography";
//import SNETPagination from "shared/dist/components/SNETPagination";
import NoDataFoundImg from "shared/dist/assets/images/NoDataFound.png";

import { useStyles } from "./styles";
import TableRow from "./TableRow";
import ExpandedTable from "./ExpandedTable";
import { stakeActions } from "../../Services/Redux/actionCreators";
import InlineLoader from "../InlineLoader";

//import { itemsPerPageOptions } from "./content";

const stateSelector = state => ({
  myTransactions: state.stakeReducer.myTransactions,
  metamaskDetails: state.metamaskReducer.metamaskDetails,
  isLoading: state.loader.txnList.isLoading,
});

const StakeTransitions = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [expandTable, setExpandTable] = useState({ 0: false });

  const { myTransactions, metamaskDetails, isLoading } = useSelector(state => stateSelector(state));

  useEffect(() => {
    try {
      // TODO: Convert the same to async Constant based on the need...
      dispatch(stakeActions.fetchStakeTransactions(metamaskDetails));
    } catch (_error) {
      //console.log("error - ", error);
      // TODO - Need to handle the error based on overall Web App
    }
  }, [dispatch, metamaskDetails]);

  const handleExpandeTable = siteMapIndex => {
    const currentValue = expandTable[siteMapIndex] ? expandTable[siteMapIndex] : false;
    const setValue = { [siteMapIndex]: !currentValue };
    setExpandTable({ ...expandTable, ...setValue });
  };

  if (isLoading) {
    return <InlineLoader />;
  }

  if (myTransactions.length === 0) {
    return (
      <div className={classes.noDataFoundSection}>
        <img src={NoDataFoundImg} alt="No Data Found" />
        <Typography>You have no stakes.</Typography>
        <Typography>
          Refer to <span>Open Staking</span> to make a stake.
        </Typography>
      </div>
    );
  }

  return (
    <div className={classes.stakeTransactionContainer}>
      <div className={classes.header}>
        <Typography variant="h6">Transaction History</Typography>
      </div>
      <Typography className={classes.pageTitle}>Stake Session</Typography>

      {myTransactions.map(stakeWindow => (
        <div key={stakeWindow.stakeMapIndex} className={classes.table}>
          <TableRow
            stakeWindow={stakeWindow}
            expandTable={expandTable[stakeWindow.stakeMapIndex] ? `${expandTable[stakeWindow.stakeMapIndex]}` : false}
            handleExpandeTable={handleExpandeTable}
          />
          <ExpandedTable
            transactionList={stakeWindow.transactionList}
            showTable={expandTable[stakeWindow.stakeMapIndex] ? `${expandTable[stakeWindow.stakeMapIndex]}` : false}
          />
        </div>
      ))}
      {/* TODO - Will Add the Pagination Functionality based on the need */}
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
