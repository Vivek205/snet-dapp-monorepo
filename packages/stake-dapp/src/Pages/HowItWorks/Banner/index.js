import React, { useState, useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import SwapHorizontalCircleIcon from "@material-ui/icons/SwapHorizontalCircle";
import InfoIcon from "@material-ui/icons/Info";
import TimerIcon from "@material-ui/icons/Timer";

import SNETTextfield from "shared/dist/components/SNETTextfield";
import SNETButton from "shared/dist/components/SNETButton";

import { useStyles } from "./styles";
import { GlobalRoutes } from "../../../GlobalRouter/Routes";
import { stakeActions } from "../../../Services/Redux/actionCreators";
import Timer from "../../../Components/CreateStake/SessionTime/Timer";

const calculaterFields = {
  stakeAmount: 750,
  userRewardAmount: 0,
  poolStakeAmount: 68000,
  maxStakeAmount: 100000,
  stakeRewardAmount: 5000,
  numOfStakers: 20,
  incubationPeriodInDays: 30,
};

// const recentStakeWindow = {
//   startPeriod: moment().unix(),
//   submissionEndPeriod: moment().unix() + 10,
// }

const Banner = ({ classes }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { recentStakeWindow } = useSelector(state => state.stakeReducer);

  const currentTime = moment().unix();
  const [stakeCalculatorFields, setStakeCalculatorFields] = useState(calculaterFields);
  const [showTimer, setShowTimer] = useState(
    currentTime >= recentStakeWindow.startPeriod && currentTime < recentStakeWindow.submissionEndPeriod ? true : false
  );
  const [startTime, setStartTime] = useState(currentTime);
  const [endTime, setEndTime] = useState(recentStakeWindow.submissionEndPeriod);
  const interval = 1000;

  useEffect(() => {
    dispatch(stakeActions.fetchRecentStakeWindowFromBlockchain());
  }, [dispatch]);

  const handleTimerCompletion = () => {
    setShowTimer(false);
    setStartTime(0);
    setEndTime(0);
  };

  const getRewardAmount = () => {
    const _finalPoolStakeAmount =
      parseInt(stakeCalculatorFields.stakeAmount) + parseInt(stakeCalculatorFields.poolStakeAmount);

    let _stakeAmount = parseInt(stakeCalculatorFields.stakeAmount);
    if (
      _stakeAmount > parseInt(stakeCalculatorFields.maxStakeAmount) ||
      _finalPoolStakeAmount > parseInt(stakeCalculatorFields.maxStakeAmount)
    ) {
      _stakeAmount = parseInt(stakeCalculatorFields.maxStakeAmount);
    }

    const rewardAmount = Math.floor(
      (_stakeAmount * parseInt(stakeCalculatorFields.stakeRewardAmount)) /
        Math.min(_finalPoolStakeAmount, parseInt(stakeCalculatorFields.maxStakeAmount))
    );

    return isNaN(rewardAmount) ? 0 : rewardAmount;
  };

  const handleDataChange = event => {
    if (!isNaN(event.target.value) && event.target.value > 0) {
      setStakeCalculatorFields({ ...stakeCalculatorFields, [event.target.name]: event.target.value });
    } else {
      setStakeCalculatorFields({ ...stakeCalculatorFields, [event.target.name]: "" });
    }
  };

  const navigateToLanding = () => {
    history.push(GlobalRoutes.LANDING.path);
  };

  const CounterTitle = () => {
    if (showTimer === true) {
      return (
        <Fragment>
          <Typography>Current Session</Typography>
          <Typography>Open for</Typography>
        </Fragment>
      );
    }

    return <Typography>Next Session will open soon</Typography>;
  };

  const ShowTimer = () => {
    if (showTimer === true) {
      return (
        <Timer
          key="waitToOpen"
          startTime={startTime}
          endTime={endTime}
          interval={interval}
          handleTimerCompletion={handleTimerCompletion}
          onHowItWorks={true}
        />
      );
    }
    return null;
  };

  return (
    <Grid container className={classes.bannerContainer}>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.bannerDesFormContainer}>
        <Grid item xs={12} sm={12} md={6} lg={6} className={classes.bannerDescriptionContainer}>
          <Typography className={classes.bannerTitle}>Earn more while holding AGI tokens</Typography>
          <Typography className={classes.bannerDescPara1}>
            By staking AGI coins, you support the operations of a blockchain network as well as rewarded with more AGI
            tokens for your contributions.
          </Typography>
          <Typography className={classes.bannerDescPara2}>
            Every month there will be open staking sessions for you to add your AGI tokens to be vested for 30 days. The
            SingularityNET foundation will use all or partial amount of your staked amounted. You can always auto renew
            for continual compounded rewards and benefits.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} className={classes.bannerForm}>
          <div className={classes.form}>
            <div className={classes.formHeader}>
              <Typography>Staking Calculator</Typography>
            </div>
            <div className={classes.stakedRewardAmt}>
              <SNETTextfield
                type="Number"
                name="stakeAmount"
                label="Staked Amount"
                value={stakeCalculatorFields.stakeAmount}
                InputProps={{ inputProps: { min: 1, max: stakeCalculatorFields.poolStakeAmount } }}
                onChange={handleDataChange}
              />
              <SwapHorizontalCircleIcon />
              <SNETTextfield
                name="userRewardAmount"
                label="Reward Amount"
                extraInfo="~Approximate for 30 day incubation"
                value={getRewardAmount()}
              />
            </div>
            <div className={classes.stakingDetails}>
              <div>
                <div className={classes.iconTitlContainer}>
                  <InfoIcon />
                  <Typography>Stake Pool Size</Typography>
                </div>
                <div className={classes.valuesContainer}>
                  <TextField
                    type="Number"
                    name="poolStakeAmount"
                    value={stakeCalculatorFields.poolStakeAmount}
                    InputProps={{ inputProps: { min: 1, max: stakeCalculatorFields.maxStakeAmount } }}
                    onChange={handleDataChange}
                  />
                </div>
              </div>
              <div>
                <div className={classes.iconTitlContainer}>
                  <InfoIcon />
                  <Typography>Max Pool Size</Typography>
                </div>
                <div className={classes.valuesContainer}>
                  <TextField
                    type="Number"
                    name="maxStakeAmount"
                    value={stakeCalculatorFields.maxStakeAmount}
                    InputProps={{ inputProps: { min: 1 } }}
                    onChange={handleDataChange}
                  />
                </div>
              </div>
              <div>
                <div className={classes.iconTitlContainer}>
                  <InfoIcon />
                  <Typography>Reward pool</Typography>
                </div>
                <div className={classes.valuesContainer}>
                  <TextField
                    type="Number"
                    name="stakeRewardAmount"
                    value={stakeCalculatorFields.stakeRewardAmount}
                    InputProps={{ inputProps: { min: 1 } }}
                    onChange={handleDataChange}
                  />
                </div>
              </div>
            </div>
            <div className={classes.formBtnContainer}>
              <SNETButton
                children="stake & earntokens"
                color="primary"
                variant="contained"
                onClick={navigateToLanding}
              />
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.countDownContainer}>
        <div className={classes.countDownTitle}>
          <TimerIcon />
          <CounterTitle />
        </div>
        <ShowTimer />
      </Grid>
    </Grid>
  );
};

export default withStyles(useStyles)(Banner);
