import moment from "moment";
import { fromWei } from "../../Utils/GenHelperFunctions";

const computeReward = stakeDetails => {
  if (stakeDetails.approvedAmount === 0) return 0;

  const rewardAmount = Math.floor(
    (stakeDetails.approvedAmount * stakeDetails.rewardAmount) /
      Math.min(stakeDetails.windowTotalStake, stakeDetails.windowMaxCap)
  );

  return isNaN(rewardAmount) ? 0 : fromWei(rewardAmount);
};

export const cardDetails = stakeDetails => [
  {
    title: "Claim Account",
    value: fromWei(stakeDetails.approvedAmount),
    unit: "AGI",
    toolTip:
      "Total AGI tokens you can claim for this stake session.  This includes the original accepted stake amount plus the reward earnings amount.",
  },
  {
    title: "Reward Earnings",
    value: computeReward(stakeDetails),
    unit: "AGI",
    toolTip: "The final amout of AGI tokens you gain as reward at the end of stake incubation period",
  },
  {
    title: "Incubating Completed",
    value: moment.unix(stakeDetails.endPeriod).format("DD MMM YYYY"),
    unit: " ",
    toolTip: "The date when the incubation period was completed",
  },
  {
    title: "Stakers",
    value: stakeDetails.numOfStakers,
    unit: "people",
  },
  {
    title: "Stake Pool Size",
    value: fromWei(stakeDetails.windowTotalStake),
    unit: "AGI",
  },
  {
    title: "Reward Pool",
    value: fromWei(stakeDetails.rewardAmount),
    unit: "AGI",
  },
];

export const btnDetails = [
  // {
  //   action: "reStake",
  //   color: "primary",
  //   variant: "text",
  //   text: "re-stake",
  // },
  {
    action: "claimStake",
    color: "primary",
    variant: "contained",
    text: "widthdraw claim",
  },
];
