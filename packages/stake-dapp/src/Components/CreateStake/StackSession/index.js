import React from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import InfoIcon from "@material-ui/icons/Info";

import SNETButton from "shared/dist/components/SNETButton";
import { useStyles } from "./styles";
import { cardDetails } from "./content";
import Card from "./Card";

const StackSession = () => {
  const classes = useStyles();

  return (
    <div className={classes.StackSessionContainer}>
      <div className={classes.header}>
        <Typography variant="h6">Session Time - Feb 2020 #1234</Typography>
      </div>
      <div className={classes.content}>
        <div className={classes.cards}>
          {cardDetails.map(item => (
            <Card key="item.title" title={item.title} value={item.value} unit={item.unit} />
          ))}
        </div>
        <div className={classes.checkboxContent}>
          <FormControlLabel
            control={<Checkbox checked={true} color="primary" />}
            label="Auto Renew to next stake session"
          />
          <Typography>
            Renewing stakes (and profit margins) to the next avaliable stake session gives you priority over new
            stakers. Renewing stakes avoids the minimum and maximum AGI requirements. Renewing saves you in ETH gas
            cost.
          </Typography>
        </div>
        <div className={classes.infoBox}>
          <InfoIcon />
          <div>
            <Typography>- Stake amount must be minimum 500 AGI and maximum 1000 AGI</Typography>
            <Typography>- SNET foundation will accept all or a partial amount of your stake.</Typography>
            <Typography>
              - Rejected stake portions not accepted will be returned to your wallet account automatically (no gas
              cost).
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.btnContainer}>
        <SNETButton color="primary" variant="text" children="withdraw" />
        <SNETButton color="primary" variant="contained" children="add stake amount" />
      </div>
    </div>
  );
};

export default StackSession;
