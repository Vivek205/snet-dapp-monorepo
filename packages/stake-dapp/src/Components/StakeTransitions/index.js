import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Typography from "@material-ui/core/Typography";
import NoDataFoundImg from "shared/dist/assets/images/NoDataFound.png";

import { useStyles } from "./styles";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import ExpandedTable from "./ExpandedTable";
import { stakeActions } from "../../Services/Redux/actionCreators";
import InlineLoader from "../InlineLoader";
import NoMetaMask from "../NoMetamask";

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

  const fetchStakeTransactions = useCallback(() => {
    try {
      dispatch(stakeActions.fetchStakeTransactions(metamaskDetails));
    } catch (_error) {
      // Ignore as we show appropriate error
    }
  }, [dispatch, metamaskDetails]);

  useEffect(() => {
    fetchStakeTransactions();
  }, [fetchStakeTransactions]);

  const handleExpandeTable = siteMapIndex => {
    const currentValue = expandTable[siteMapIndex] ? expandTable[siteMapIndex] : false;
    const setValue = { [siteMapIndex]: !currentValue };
    setExpandTable({ ...expandTable, ...setValue });
  };

  if (isLoading) {
    return <InlineLoader />;
  }

  if (!metamaskDetails.isTxnsAllowed) {
    return <NoMetaMask />;
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
      <div className={classes.table}>
        <TableHeader />
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
      </div>
    </div>
  );
};

export default StakeTransitions;
