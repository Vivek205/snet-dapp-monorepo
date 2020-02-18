import React from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import InfoIcon from "@material-ui/icons/Info";
import LinearProgress from "@material-ui/core/LinearProgress";

import SNETButton from "shared/dist/components/SNETButton";
import { useStyles } from "./styles";
import Card from "./Card";

const StackSession = ({ cardDetails, incubationProgressDetails, date, id, btnDetails }) => {
  const classes = useStyles();

  return (
    <div className={classes.StackSessionContainer}>
      <div className={classes.header}>
        <Typography variant="h6">
          Stake Session - {date} {id}
        </Typography>
      </div>
      <div className={classes.content}>
        {incubationProgressDetails ? (
          <div className={classes.incubationContainer}>
            <div className={classes.dayCountContainer}>
              <div>
                <InfoIcon />
                <Typography className={classes.incubationText}>Incubation Progress</Typography>
              </div>
              <div className={classes.daysCount}>
                <Typography className={classes.value}>12/30</Typography>
                <Typography className={classes.unit}> days</Typography>
              </div>
            </div>
            <div className={classes.progressBarContainer}>
              <div className={classes.startFinishDate}>
                <Typography>Started 01/1/2020</Typography>
                <Typography>Finished 01/30/2020</Typography>
              </div>
              <LinearProgress variant="determinate" value={30} className={classes.linearProgress} />
            </div>
          </div>
        ) : null}
        <div className={classes.cards}>
          {cardDetails.map(item => (
            <Card key={item.title} title={item.title} value={item.value} unit={item.unit} />
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
      {btnDetails ? (
        <div className={classes.btnContainer}>
          {btnDetails.map(button => (
            <SNETButton key={button.text} color={button.color} variant={button.variant} children={button.text} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default StackSession;
