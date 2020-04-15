import { fromWei } from "../../Utils/GenHelperFunctions";
import BigNumber from "bignumber.js";

// Do the Calculation in AGI rather than wei
const computeReward = activeStake => {
  const myStake = new BigNumber(activeStake.myStake);
  const myStakeProcessed = new BigNumber(activeStake.myStakeProcessed);

  if (myStake.lte(0)) return 0;

  const windowRewardAmount = new BigNumber(activeStake.rewardAmount);
  const windowMaxCap = new BigNumber(activeStake.windowMaxCap);
  let totalStakedAmount = new BigNumber(activeStake.totalStakedAmount);
  const windowTotalStake = new BigNumber(activeStake.windowTotalStake);

  if (myStake.gt(myStakeProcessed)) {
    totalStakedAmount = totalStakedAmount.plus(myStake.minus(myStakeProcessed));
  }
  if (myStake.lt(myStakeProcessed)) {
    totalStakedAmount = totalStakedAmount.minus(myStakeProcessed.minus(myStake));
  }

  if (totalStakedAmount.lte(0)) {
    totalStakedAmount = new BigNumber(activeStake.myStake);
  }

  let rewardAmount = new BigNumber(0);

  // Considering Auto Renewed Stake For calculation
  totalStakedAmount = totalStakedAmount.plus(windowTotalStake);
  if (totalStakedAmount.lt(windowMaxCap)) {
    rewardAmount = myStake.times(windowRewardAmount).div(totalStakedAmount);
  } else {
    rewardAmount = myStake.times(windowRewardAmount).div(windowMaxCap);
  }

  return rewardAmount;
};

export const cardDetails = activeStake => [
  {
    title: "Stake Amount",
    value: fromWei(activeStake.myStake),
    unit: "AGI",
    toolTip: "Total amount of AGI tokens that you have for this stake session",
  },
  {
    title: "Max Reward",
    value: fromWei(computeReward(activeStake)),
    unit: "AGI",
    toolTip: "Max amount of AGI tokens you could gain as reward at the end of the stake incubation.",
  },
  {
    title: "Incubating Period",
    value: Math.floor((activeStake.endPeriod - activeStake.submissionEndPeriod) / (60 * 60 * 24)),
    unit: "days",
    toolTip: "Amount of time that AGI tokens staked will be vested and locked in.",
  },
  {
    title: "Stakers",
    value: activeStake.totalStakers,
    unit: "people",
    toolTip: "The number of people who have contributed AGI tokens to this stake session",
  },
  {
    title: "Current Pool Size",
    value: fromWei(BigNumber.sum(activeStake.totalStakedAmount, activeStake.windowTotalStake)),
    unit: "AGI",
    toolTip: "Current total amount of AGI tokens that have been contributed by all stakers",
  },
  {
    title: "Reward Pool",
    value: fromWei(activeStake.rewardAmount),
    unit: "AGI",
    toolTip: "The total reward amount of AGI tokens that will be divided and distributed to stakers",
  },
];

export const btnDetails = [
  {
    action: "withdraw",
    color: "primary",
    variant: "text",
    text: "withdraw",
  },
  {
    action: "addStake",
    color: "primary",
    variant: "contained",
    text: "add stake amount",
  },
];

export const agreementDetails = {
  label: "Auto Renew to next stake session",
  description:
    "Renewing stakes (and rewards) to the next available stake session gives you priority over new stakers. Renewing stakes avoids the minimum and maximum AGI requirements. Renewing saves you in ETH gas cost.",
};

export const withdrawStakeAmountDetails = activeStake => [
  {
    title: "Total Stake Amount",
    amount: fromWei(activeStake.myStake),
    unit: "AGI",
    toolTip: "Total amount of AGI tokens that you have for this stake session",
  },
  {
    title: "Total Max Reward",
    amount: fromWei(computeReward(activeStake)),
    unit: "AGI",
    toolTip: "Max amount of AGI tokens you could gain as reward at the end of the stake incubation.",
  },
  {
    title: "Current Pool Size",
    amount: fromWei(BigNumber.sum(activeStake.totalStakedAmount, activeStake.windowTotalStake)),
    toolTip: "Current total amount of AGI tokens that have been contributed by all stakers",
  },
  {
    title: "Stakers",
    amount: activeStake.totalStakers,
    unit: "people",
    toolTip: "The number of people who have contributed AGI tokens to this stake session",
  },
];

export const addStakeAmountDetails = activeStake => [
  {
    title: "Total Stake Amount",
    amount: fromWei(activeStake.myStake),
    unit: "AGI",
    toolTip: "Total amount of AGI tokens that you have for this stake session",
  },
  {
    title: "Total Max Reward",
    amount: fromWei(computeReward(activeStake)),
    unit: "AGI",
    toolTip: "Max amount of AGI tokens you could gain as reward at the end of the stake incubation.",
  },
  {
    title: "Current Pool Size",
    amount: fromWei(BigNumber.sum(activeStake.totalStakedAmount, activeStake.windowTotalStake)),
    unit: "AGI",
    toolTip: "Current total amount of AGI tokens that have been contributed by all stakers",
  },
  {
    title: "Stakers",
    amount: activeStake.totalStakers,
    unit: "people",
    toolTip: "The number of people who have contributed AGI tokens to this stake session",
  },
];
