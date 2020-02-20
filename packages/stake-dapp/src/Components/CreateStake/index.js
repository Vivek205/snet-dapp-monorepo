import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";

import { useStyles } from "./styles";
import SessionTime from "./SessionTime";
import AccountBalance from "../AccountBalance";
import StackSession from "../StackSession";
import { cardDetails, btnDetails, agreementDetails, withdrawStakeAmountDetails } from "./content";
import WithdrawStake from "./WithdrawStake";

import SNETButton from "shared/dist/components/SNETButton";

const CreateStake = () => {
  const classes = useStyles();
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <SessionTime />
        <AccountBalance />
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={8} className={classes.rightSideSection}>
        <StackSession
          cardDetails={cardDetails}
          btnDetails={btnDetails}
          date="Feb 2020"
          id="#1234"
          agreementDetails={agreementDetails}
        />
      </Grid>
      <SNETButton children="open popup" color="primary" onClick={openPopup} />
      <WithdrawStake
        open={showPopup}
        handleClose={closePopup}
        withdrawStakeAmountDetails={withdrawStakeAmountDetails}
      />
    </Grid>
  );
};

export default CreateStake;
