import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { firstCardDetails, firstBtnDetails, secondCardDetails, secondBtnDetails } from "./content";
import { useStyles } from "./styles";
import AccountBalance from "../AccountBalance";
import Card from "../StackSession/Card";

import AlertBox from "shared/dist/components/AlertBox";
import SNETButton from "shared/dist/components/SNETButton";

const ClaimStake = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <AccountBalance />
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={8} className={classes.stakeSessionBoxContainer}>
        <div className={classes.box}>
          <div className={classes.header}>
            <Typography variant="h6">Stake Session - Oct 2019 #1267</Typography>
          </div>
          <div className={classes.cards}>
            {firstCardDetails.map(card => (
              <Card key={card.title} title={card.title} value={card.value} unit={card.unit} />
            ))}
          </div>
          <AlertBox type="error" message="error state message" />
          <div className={classes.btnContainer}>
            {firstBtnDetails.map(button => (
              <SNETButton key={button.text} children={button.text} color={button.color} variant={button.variant} />
            ))}
          </div>
        </div>
        <div className={classes.box}>
          <div className={classes.header}>
            <Typography variant="h6">Stake Session - Feb 2019 #2345</Typography>
          </div>
          <div className={classes.cards}>
            {secondCardDetails.map(card => (
              <Card key={card.title} title={card.title} value={card.value} unit={card.unit} />
            ))}
          </div>
          <div className={classes.btnContainer}>
            {secondBtnDetails.map(button => (
              <SNETButton key={button.text} children={button.text} color={button.color} variant={button.variant} />
            ))}
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default ClaimStake;
