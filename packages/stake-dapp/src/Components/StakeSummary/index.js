import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import InfoIcon from "@material-ui/icons/Info";

import TokenStakedImg from "shared/dist/assets/images/tokenStaked.png";
import StakersImg from "shared/dist/assets/images/Stakers.png";
import TokenRewardDistributedImg from "shared/dist/assets/images/rewardDistributed.png";

import { useStyles } from "./styles";

const StakeSummary = ({ classes }) => {
  return (
    <div className={classes.stakeSummaryContainer}>
      <Typography className={classes.stakeSummaryTitle}>Stake Summary</Typography>

      <Grid container className={classes.stakeSummaryDetails}>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <div className={classes.stakeSummaryIcon}>
            <img src={TokenStakedImg} alt="Tokens Staked" />
          </div>
          <div className={classes.stakeSummaryValues}>
            <Typography>
              37<span>million</span>
            </Typography>
            <Typography>token staked</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <div className={classes.stakeSummaryIcon}>
            <img src={StakersImg} alt="Stakers" />
          </div>
          <div className={classes.stakeSummaryValues}>
            <Typography>
              200<span>+</span>
            </Typography>
            <Typography>stakers</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <div className={classes.stakeSummaryIcon}>
            <img src={TokenRewardDistributedImg} alt="Token Reward Distributed" />
          </div>
          <div className={classes.stakeSummaryValues}>
            <Typography>
              20,000<span>+</span>
            </Typography>
            <Typography>token rewards distributed</Typography>
          </div>
        </Grid>
      </Grid>

      <div className={classes.stakeSessionContainer}>
        <Typography className={classes.stakeSessionHeader}>Stake Session - Feb 2020 #626</Typography>
        <div className={classes.stakeSessionDetails}>
          <Grid container>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className={classes.iconTooltipContainer}>
                <div className={classes.toolTipContainer}>
                  <InfoIcon />
                  <Typography>toolTip</Typography>
                </div>
                <Typography className={classes.title}>Stakers</Typography>
              </div>
              <div className={classes.stakeSessionValues}>
                <Typography className={classes.value}>2,200</Typography>
                <Typography className={classes.unit}>people</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className={classes.iconTooltipContainer}>
                <div className={classes.toolTipContainer}>
                  <InfoIcon />
                  <Typography>toolTip</Typography>
                </div>
                <Typography className={classes.title}>Final Pool Size</Typography>
              </div>
              <div className={classes.stakeSessionValues}>
                <Typography className={classes.value}>79,000</Typography>
                <Typography className={classes.unit}>AGI</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className={classes.iconTooltipContainer}>
                <div className={classes.toolTipContainer}>
                  <InfoIcon />
                  <Typography>toolTip</Typography>
                </div>
                <Typography className={classes.title}>Reward Pool</Typography>
              </div>
              <div className={classes.stakeSessionValues}>
                <Typography className={classes.value}>10,000</Typography>
                <Typography className={classes.unit}>AGI</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className={classes.iconTooltipContainer}>
                <div className={classes.toolTipContainer}>
                  <InfoIcon />
                  <Typography>toolTip</Typography>
                </div>
                <Typography className={classes.title}>Closed Date</Typography>
              </div>
              <div className={classes.stakeSessionValues}>
                <Typography className={classes.value}>25 Feb2020</Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className={classes.stakeSessionContainer}>
        <Typography className={classes.stakeSessionHeader}>Stake Session - Feb 2020 #626</Typography>
        <div className={classes.stakeSessionDetails}>
          <Grid container>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className={classes.iconTooltipContainer}>
                <div className={classes.toolTipContainer}>
                  <InfoIcon />
                  <Typography>toolTip</Typography>
                </div>
                <Typography className={classes.title}>Stakers</Typography>
              </div>
              <div className={classes.stakeSessionValues}>
                <Typography className={classes.value}>2,200</Typography>
                <Typography className={classes.unit}>people</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className={classes.iconTooltipContainer}>
                <div className={classes.toolTipContainer}>
                  <InfoIcon />
                  <Typography>toolTip</Typography>
                </div>
                <Typography className={classes.title}>Final Pool Size</Typography>
              </div>
              <div className={classes.stakeSessionValues}>
                <Typography className={classes.value}>79,000</Typography>
                <Typography className={classes.unit}>AGI</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className={classes.iconTooltipContainer}>
                <div className={classes.toolTipContainer}>
                  <InfoIcon />
                  <Typography>toolTip</Typography>
                </div>
                <Typography className={classes.title}>Reward Pool</Typography>
              </div>
              <div className={classes.stakeSessionValues}>
                <Typography className={classes.value}>10,000</Typography>
                <Typography className={classes.unit}>AGI</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className={classes.iconTooltipContainer}>
                <div className={classes.toolTipContainer}>
                  <InfoIcon />
                  <Typography>toolTip</Typography>
                </div>
                <Typography className={classes.title}>Closed Date</Typography>
              </div>
              <div className={classes.stakeSessionValues}>
                <Typography className={classes.value}>25 Feb2020</Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default withStyles(useStyles)(StakeSummary);
