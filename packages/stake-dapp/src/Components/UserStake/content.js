import { fromWei } from "../../Utils/GenHelperFunctions";
import BigNumber from "bignumber.js";
import momemt from "moment";

export const incubationProgressDetails = stakeDetails => ({
  startPeriod: stakeDetails.startPeriod,
  submissionEndPeriod: stakeDetails.submissionEndPeriod,
  endPeriod: stakeDetails.endPeriod,
});

const computeReward = stakeDetails => {
  const currentTimestamp = momemt().unix();

  if (
    (currentTimestamp > stakeDetails.approvalEndPeriod && stakeDetails.approvedAmount === 0) ||
    (currentTimestamp < stakeDetails.approvalEndPeriod && stakeDetails.pendingForApprovalAmount === 0)
  )
    return 0;

  const stakeAmount = new BigNumber(
    stakeDetails.approvedAmount === 0 ? stakeDetails.pendingForApprovalAmount : stakeDetails.approvedAmount
  );
  const windowRewardAmount = new BigNumber(stakeDetails.rewardAmount);

  let windowTotalStake = new BigNumber(stakeDetails.windowTotalStake);
  if (currentTimestamp < stakeDetails.approvalEndPeriod) {
    windowTotalStake = windowTotalStake.plus(new BigNumber(stakeDetails.totalStakedAmount));
  }

  const windowMaxCap = new BigNumber(stakeDetails.windowMaxCap);

  let rewardAmount = new BigNumber(0);

  if (windowTotalStake.lt(windowMaxCap)) {
    rewardAmount = stakeAmount.times(windowRewardAmount).div(windowTotalStake);
  } else {
    rewardAmount = stakeAmount.times(windowRewardAmount).div(windowMaxCap);
  }

  return rewardAmount;
};

export const cardDetails = stakeDetails => [
  {
    title: "Accepted Stake Amount",
    value: fromWei(
      new BigNumber(stakeDetails.approvedAmount).plus(new BigNumber(stakeDetails.pendingForApprovalAmount))
    ),
    unit: "AGI",
    toolTip: "The amount of AGI tokens that the SingularityNet foundation accepted from your stake.",
  },
  {
    title: "Reward Amount",
    value: fromWei(computeReward(stakeDetails)),
    unit: "AGI",
    toolTip: "The final amout of AGI tokens you gain as reward at the end of stake incubation period",
  },
  {
    title: "Refunded Amount",
    value: fromWei(stakeDetails.refundAmount),
    unit: "AGI",
    toolTip:
      "The amount of AGI tokens refunded automatically to your wallet account from the unused portion of your original stake not accepted by the SingularityNet foundation.",
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
    "Renewing stakes (and rewards) to the next avaliable stake session gives you priority over new stakers. Renewing stakes avoids the minimum and maximum AGI requirements. Renewing saves you in ETH gas cost.",
};
