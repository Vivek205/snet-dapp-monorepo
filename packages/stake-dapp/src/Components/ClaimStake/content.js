import moment from "moment";
import { fromWei } from "../../Utils/GenHelperFunctions";
import BigNumber from "bignumber.js";

const computeReward = stakeDetails => {
  if (stakeDetails.approvedAmount === 0 && stakeDetails.claimableAmount === 0) return 0;
  const stakeRewardAmount = new BigNumber(stakeDetails.stakeRewardAmount);
  return stakeRewardAmount;
};

const getUserStake = stakeDetails => {
  const approvedAmount = new BigNumber(stakeDetails.approvedAmount);
  const claimableAmount = new BigNumber(stakeDetails.claimableAmount);
  const stakeRewardAmount = new BigNumber(stakeDetails.stakeRewardAmount);

  // Both claimableAmount & approvedAmount at this stage of the Stake has reward added to it
  if (claimableAmount.gt(0)) {
    return claimableAmount.minus(stakeRewardAmount);
  }
  return approvedAmount.minus(stakeRewardAmount);
};

export const yourStakeDetails = stakeDetails => [
  {
    title: "Total Claim Amount",
    value: fromWei(getUserStake(stakeDetails)),
    unit: "AGIX",
    toolTip:
      "Total AGIX tokens you can claim for this stake session. This includes the original accepted stake amount plus the reward earnings amount.",
  },
  {
    title: "Reward Earnings",
    value: fromWei(computeReward(stakeDetails)),
    unit: "AGIX",
    toolTip: "The amount of AGIX tokens you’ll earn as reward for your stake during this incubation period",
  },
  {
    title: "Incubating Ended",
    value: moment.unix(stakeDetails.endPeriod).format("DD MMM YYYY"),
    unit: " ",
    toolTip: "The incubation period completion date.",
  },
];

export const sessionDetails = stakeDetails => [
  {
    title: "Stakers",
    value: stakeDetails.numOfStakers,
    unit: "people",
    toolTip: "Current number of participants who have contributed AGIX tokens to the stake",
  },
  {
    title: "Stake Pool Size",
    value: fromWei(stakeDetails.windowTotalStake),
    unit: "AGIX",
    toolTip: "The total amount of AGIX tokens that have been contributed by all stakers",
  },
  {
    title: "Reward Pool",
    value: fromWei(stakeDetails.rewardAmount),
    unit: "AGIX",
    toolTip: "Number of AGIX tokens that will be divided amongst all stakers as the reward for the current window",
  },
];

export const btnDetails = [
  // {
  //   action: "reStake",
  //   color: "primary",
  //   variant: "text",
  //   text: "re-stake",
  // },
  // {
  //   action: "withdrawStake",
  //   color: "primary",
  //   variant: "contained",
  //   text: "reclaim stake",
  // },
  {
    action: "claimStake",
    color: "primary",
    variant: "contained",
    text: "withdraw claim",
  },
];
