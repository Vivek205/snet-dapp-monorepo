import { fromWei } from "../../Utils/GenHelperFunctions";
import BigNumber from "bignumber.js";

// Do the Calculation in AGIX rather than wei
const computeReward = activeStake => {
  let myStake = new BigNumber(activeStake.myStake);
  const myStakeAutoRenewed = new BigNumber(activeStake.myStakeAutoRenewed);
  const myStakeProcessed = new BigNumber(activeStake.myStakeProcessed);

  if (myStake.lte(0) && myStakeAutoRenewed.lte(0)) return 0;

  const windowRewardAmount = new BigNumber(activeStake.rewardAmount);
  const windowMaxCap = new BigNumber(activeStake.windowMaxCap);
  let totalStakedAmount = new BigNumber(activeStake.totalStakedAmount);
  //const windowTotalStake = new BigNumber(activeStake.windowTotalStake);

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

  // Add AutoRenewed State
  myStake = myStake.plus(myStakeAutoRenewed);

  if (totalStakedAmount.lt(windowMaxCap)) {
    rewardAmount = myStake.times(windowRewardAmount).div(totalStakedAmount);
  } else {
    rewardAmount = myStake.times(windowRewardAmount).div(windowMaxCap);
  }

  return rewardAmount;
};

export const yourStakeDetails = activeStake => [
  {
    title: "Added Stake",
    value: fromWei(activeStake.myStake),
    unit: "AGIX",
    toolTip: "The amount of AGIX tokens that you have added to this stake session.",
  },
  {
    title: "Renewed Amount",
    value: fromWei(activeStake.myStakeAutoRenewed),
    unit: "AGIX",
    toolTip:
      "This is the amount of AGIX tokens that were auto renewed from a previous stake session.  You will not be able to withdraw these tokens until the incubation period complete and auto renewed is turned off.   See Transactions for session details.",
  },
  {
    title: "Total Stake",
    value: fromWei(BigNumber.sum(activeStake.myStake, activeStake.myStakeAutoRenewed)),
    unit: "AGIX",
    toolTip:
      "The total amount of AGIX tokens that you have for this stake session.   This combines the amounts from “Added Stake” and “Renewed Amount”.",
  },
  {
    title: "Max Reward",
    value: fromWei(computeReward(activeStake)),
    unit: "AGIX",
    toolTip: "Maximum number of AGIX tokens you can gain as a reward at the end of the stake period.",
  },
];

export const sessionDetails = activeStake => [
  {
    title: "Stakers",
    value: activeStake.totalStakers,
    unit: "people",
    toolTip: "Current number of participants who have contributed AGIX tokens to the stake.",
  },
  {
    title: "Current Pool Size",
    value: fromWei(BigNumber.sum(activeStake.totalStakedAmount, activeStake.windowTotalStake)),
    unit: "AGIX",
    toolTip: "Total amount of AGIX tokens staked in the pool currently",
  },
  {
    title: "Reward Pool",
    value: fromWei(activeStake.rewardAmount),
    unit: "AGIX",
    toolTip: "Number of AGIX tokens that will be divided amongst all stakers as the reward for the current window",
  },
  {
    title: "Incubation Time",
    value: Math.ceil((activeStake.endPeriod - activeStake.submissionEndPeriod) / (60 * 60 * 24)),
    unit: "days",
    toolTip: "Number of days that the AGIX tokens in the stake will be locked",
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
    "Renewing stakes (and rewards) to the next available stake session gives you priority over new stakers. Renewing stakes avoids the minimum and maximum AGIX requirements. Renewing saves you in ETH gas cost.",
};

export const withdrawStakeAmountDetails = activeStake => [
  {
    title: "Total Stake Amount",
    amount: fromWei(BigNumber.sum(activeStake.myStake, activeStake.myStakeAutoRenewed)),
    unit: "AGIX",
    toolTip: "Total amount of AGIX tokens that you have for this stake session",
  },
  {
    title: "Total Max Reward",
    amount: fromWei(computeReward(activeStake)),
    unit: "AGIX",
    toolTip: "Maximum number of AGIX tokens you can gain as a reward at the end of the stake period.",
  },
  // {
  //   title: "Current Pool Size",
  //   amount: fromWei(BigNumber.sum(activeStake.totalStakedAmount, activeStake.windowTotalStake)),
  //   toolTip: "Current total amount of AGIX tokens that have been contributed by all stakers",
  // },
  // {
  //   title: "Stakers",
  //   amount: activeStake.totalStakers,
  //   unit: "people",
  //   toolTip: "The number of people who have contributed AGIX tokens to this stake session",
  // },
];

export const addStakeAmountDetails = activeStake => [
  {
    title: "Total Stake Amount",
    amount: fromWei(BigNumber.sum(activeStake.myStake, activeStake.myStakeAutoRenewed)),
    unit: "AGIX",
    toolTip: "Total amount of AGIX tokens that you have for this stake session",
  },
  {
    title: "Total Max Reward",
    amount: fromWei(computeReward(activeStake)),
    unit: "AGIX",
    toolTip: "Maximum number of AGIX tokens you can gain as a reward at the end of the stake period.",
  },
  // {
  //   title: "Current Pool Size",
  //   amount: fromWei(BigNumber.sum(activeStake.totalStakedAmount, activeStake.windowTotalStake)),
  //   unit: "AGIX",
  //   toolTip: "Current total amount of AGIX tokens that have been contributed by all stakers",
  // },
  // {
  //   title: "Stakers",
  //   amount: activeStake.totalStakers,
  //   unit: "people",
  //   toolTip: "The number of people who have contributed AGIX tokens to this stake session",
  // },
];
