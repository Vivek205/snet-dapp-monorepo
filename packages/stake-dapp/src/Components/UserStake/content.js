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
    title: "Accepted Stak Amount",
    value: fromWei(stakeDetails.approvedAmount),
    unit: "AGI",
  },
  {
    title: "Reward Amount",
    value: computeReward(stakeDetails),
    unit: "AGI",
  },
  {
    title: "Refunded Amount",
    value: fromWei(stakeDetails.refundAmount),
    unit: "AGI",
  },
  {
    title: "Reward Pool",
    value: fromWei(stakeDetails.rewardAmount),
    unit: "AGI",
  },
  {
    title: "Current Pool Size",
    value: fromWei(stakeDetails.windowTotalStake),
    unit: "AGI",
  },
  {
    title: "Max Pool Size",
    value: fromWei(stakeDetails.windowMaxCap),
    unit: "AGI",
  },
];

export const agreementDetails = {
  label: "Auto Renew to next stake session",
  description:
    "Renewing stakes (and profit margins) to the next avaliable stake session gives you priority over new stakers. Renewing stakes avoids the minimum and maximum AGI requirements. Renewing saves you in ETH gas cost.",
};
