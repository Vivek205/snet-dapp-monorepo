import { fromWei } from "../../Utils/GenHelperFunctions";

export const incubationProgressDetails = stakeDetails => ({
  startPeriod: stakeDetails.startPeriod,
  submissionEndPeriod: stakeDetails.submissionEndPeriod,
  endPeriod: stakeDetails.endPeriod,
});

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
    title: "Accepted Stake Amount",
    value: fromWei(stakeDetails.approvedAmount),
    unit: "AGI",
    toolTip:
      "The amount of AGI tokens that network accepted from your stake.  Any partial amounts not accepted by SNET Foundation will be automatically refunded to your wallet account.",
  },
  {
    title: "Reward Amount",
    value: computeReward(stakeDetails),
    unit: "AGI",
    toolTip: "The final amout of AGI tokens you gain as reward at the end of stake incubation period",
  },
  {
    title: "Refunded Amount",
    value: fromWei(stakeDetails.refundAmount),
    unit: "AGI",
    toolTip:
      "The amount of AGI tokens refunded automatically to your wallet account  from the unused portion of your original stake not accepted by the network.",
  },
  {
    title: "Stakers",
    value: stakeDetails.numOfStakers,
    unit: "people",
  },
  {
    title: "Current Pool Size",
    value: fromWei(stakeDetails.windowTotalStake),
    unit: "AGI",
  },
  {
    title: "Reward Pool",
    value: fromWei(stakeDetails.rewardAmount),
    unit: "AGI",
  },
];

export const agreementDetails = {
  label: "Auto Renew to next stake session",
  description:
    "Renewing stakes (and profit margins) to the next avaliable stake session gives you priority over new stakers. Renewing stakes avoids the minimum and maximum AGI requirements. Renewing saves you in ETH gas cost.",
};
