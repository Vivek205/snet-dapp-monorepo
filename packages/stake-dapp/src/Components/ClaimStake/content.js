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
  },
  {
    title: "Reward Earnings",
    value: computeReward(stakeDetails),
    unit: "AGI",
  },
  {
    title: "Incubating Completed",
    value: moment.unix(stakeDetails.endPeriod).format("DD MMM YYYY"),
    unit: " ",
  },
  {
    title: "Reward Pool",
    value: fromWei(stakeDetails.rewardAmount),
    unit: "AGI",
  },
  {
    title: "Stake Pool Size",
    value: fromWei(stakeDetails.windowTotalStake),
    unit: "AGI",
  },
  {
    title: "Max Pool Size",
    value: fromWei(stakeDetails.windowMaxCap),
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
