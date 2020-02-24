import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import SwapHorizontalCircleIcon from "@material-ui/icons/SwapHorizontalCircle";
import InfoIcon from "@material-ui/icons/Info";
import TimerIcon from "@material-ui/icons/Timer";

import SNETTextfield from "shared/dist/components/SNETTextfield";
import SNETButton from "shared/dist/components/SNETButton";

import Benefits from "./Benefits";
import { useStyles } from "./styles";

const HowItWorks = ({ classes }) => {
  return (
    <Grid container className={classes.howItWorksContainer}>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.bannerContainer}>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.bannerDesFormContainer}>
          <Grid item xs={12} sm={12} md={6} lg={6} className={classes.bannerDescriptionContainer}>
            <Typography className={classes.bannerTitle}>Earn more while holding AGI tokens</Typography>
            <Typography className={classes.bannerDescPara1}>
              By staking AGI coins, you support the operations of a blockchain network as well as rewarded with more AGI
              tokens for your contributions.
            </Typography>
            <Typography className={classes.bannerDescPara2}>
              Every month there will be open staking sessions for you to add your AGI tokens to be vested for 6 months.
              The SingularityNET foundation will use all or partial amount of your staked amounted and you will be
              rewarded with compounded interest.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} className={classes.bannerForm}>
            <div className={classes.form}>
              <div className={classes.formHeader}>
                <Typography>Staking Calculator</Typography>
              </div>
              <div className={classes.stakedRewardAmt}>
                <SNETTextfield label="Staked Amount" />
                <SwapHorizontalCircleIcon />
                <SNETTextfield label="Reward Amount" extraInfo="Approximate Estimate" />
              </div>
              <div className={classes.stakingDetails}>
                <div>
                  <div className={classes.iconTitlContainer}>
                    <InfoIcon />
                    <Typography>Stake Pool Size</Typography>
                  </div>
                  <div className={classes.valuesConatiner}>
                    <Typography className={classes.values}>6,000</Typography>
                    <Typography className={classes.unit}>AGI</Typography>
                  </div>
                </div>
                <div>
                  <div className={classes.iconTitlContainer}>
                    <InfoIcon />
                    <Typography># of Stakers</Typography>
                  </div>
                  <div className={classes.valuesConatiner}>
                    <Typography className={classes.values}>4000</Typography>
                    <Typography className={classes.unit}>people</Typography>
                  </div>
                </div>
                <div>
                  <div className={classes.iconTitlContainer}>
                    <InfoIcon />
                    <Typography>Incubation Period</Typography>
                  </div>
                  <div className={classes.incubationValuesConatiner}>
                    <Typography className={classes.values}>30</Typography>
                    <Typography className={classes.unit}>days</Typography>
                  </div>
                </div>
              </div>
              <div className={classes.formBtnContainer}>
                <SNETButton children="stake & earntokens" color="primary" variant="contained" />
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.countDownContainer}>
          <div className={classes.countDownTitle}>
            <TimerIcon />
            <Typography>Current Session</Typography>
            <Typography>Open for</Typography>
          </div>
          <div className={classes.countDown}>
            <div>
              <Typography className={classes.countDownValue}>05</Typography>
              <Typography className={classes.countDownUnit}>days</Typography>
            </div>
            <div>
              <Typography className={classes.countDownValue}>11</Typography>
              <Typography className={classes.countDownUnit}>hours</Typography>
            </div>
            <div>
              <Typography className={classes.countDownValue}>45</Typography>
              <Typography className={classes.countDownUnit}>minutes</Typography>
            </div>
            <div>
              <Typography className={classes.countDownValue}>23</Typography>
              <Typography className={classes.countDownUnit}>seconds</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
      <Benefits />
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.signUpContainer}>
        <Typography>Sign up for Staking Notifications</Typography>
        <input type="text" />
        <SNETButton children="subscribe" color="primary" variant="contained" />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.howItWorksSection}>
        <Typography variant="h2">How It Works</Typography>
        <Typography className={classes.howItWorksDesc}>
          Lorem ipsum dolor sit amet, mei te indoctum convenire. Sumo urbanitas moderatius eam ut, pro ex prima harum ri
          de ns. Vis obli que nusquam te, cum ex minim molestie. Eam ex modus luptatum adipiscing, pri id patrioque
          instructior, mel id tale definitionem.
        </Typography>
        <SNETButton children="start staking tokens" color="primary" variant="contained" />
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(HowItWorks);
