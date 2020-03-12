import { fromWei } from "../../Utils/GenHelperFunctions";

export const cardDetails = activeStake => [
  {
    title: "Stake Session",
    value: fromWei(activeStake.myStake),
    unit: "AGI",
    toolTip: "",
  },
  {
    title: "Max Reward",
    value: fromWei(Math.floor((activeStake.myStake * activeStake.rewardAmount) / activeStake.windowMaxCap)),
    unit: "AGI",
    toolTip: "Max amount of AGI tokens you could gain as reward at the end of the stake incubation",
  },
  {
    title: "Incubating Period",
    value: Math.floor((activeStake.endPeriod - activeStake.submissionEndPeriod) / (60 * 60 * 24)),
    unit: "days",
    toolTip: "Amount of the time that AGI tokens in the stake will be vested and locked in",
  },
  {
    title: "Stakers",
    value: activeStake.totalStakers,
    unit: "people",
    toolTip: "Current number of participants who have contributed AGI tokens to the stake",
  },
  {
    title: "Current Pool Size",
    value: fromWei(activeStake.totalStakedAmount),
    unit: "AGI",
    toolTip: "Current total amount of AGI tokens that have contributed by all stakers",
  },
  {
    title: "Reward Pool",
    value: fromWei(activeStake.rewardAmount),
    unit: "people",
    toolTip: "",
  },
];

export const btnDetails = [
  {
    action: "withdraw",
    color: "primary",
    variant: "text",
    text: "widthdraw",
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
    "Renewing stakes (and profit margins) to the next avaliable stake session gives you priority over new stakers. Renewing stakes avoids the minimum and maximum AGI requirements. Renewing saves you in ETH gas cost.",
};

export const withdrawStakeAmountDetails = activeStake => [
  {
    title: "Total Stake Amount",
    amount: fromWei(activeStake.myStake),
  },
  {
    title: "Total Max Reward",
    amount: fromWei(Math.floor((activeStake.myStake * activeStake.rewardAmount) / activeStake.windowMaxCap)),
  },
  {
    title: "Current Pool Size",
    amount: fromWei(activeStake.totalStakedAmount),
  },
  {
    title: "Stakers",
    amount: fromWei(activeStake.totalStakers),
  },
];

export const addStakeAmountDetails = activeStake => [
  {
    title: "Total Stake Amount",
    amount: fromWei(activeStake.myStake),
  },
  {
    title: "Total Max Reward",
    amount: fromWei(Math.floor((activeStake.myStake * activeStake.rewardAmount) / activeStake.windowMaxCap)),
  },
  {
    title: "Current Pool Size",
    amount: fromWei(activeStake.totalStakedAmount),
  },
  {
    title: "Stakers",
    amount: fromWei(activeStake.totalStakers),
  },
];
