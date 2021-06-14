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

  // Condition for Staking V2
  if (
    currentTimestamp > stakeDetails.submissionEndPeriod &&
    stakeDetails.approvedAmount === 0 &&
    stakeDetails.pendingForApprovalAmount === 0 &&
    stakeDetails.claimableAmount === 0
  )
    return 0;

  const stakeRewardAmount = new BigNumber(stakeDetails.stakeRewardAmount);
  if (stakeRewardAmount.gt(0)) return stakeRewardAmount;

  let stakeAmount = 0;
  if (currentTimestamp < stakeDetails.requestWithdrawStartPeriod)
    stakeAmount = new BigNumber.sum(stakeDetails.approvedAmount, stakeDetails.pendingForApprovalAmount);
  else stakeAmount = new BigNumber.sum(stakeDetails.approvedAmount, stakeDetails.claimableAmount);

  const windowRewardAmount = new BigNumber(stakeDetails.rewardAmount);

  let windowTotalStake = new BigNumber(stakeDetails.windowTotalStake);

  if (windowTotalStake.lte(0)) {
    windowTotalStake = new BigNumber(stakeDetails.totalStakedAmount);
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

const getStakeAmount = stakeDetails => {
  const currentTimestamp = momemt().unix();

  let stakeAmount = 0;
  if (currentTimestamp < stakeDetails.requestWithdrawStartPeriod)
    stakeAmount = BigNumber.sum(stakeDetails.approvedAmount, stakeDetails.pendingForApprovalAmount).minus(
      stakeDetails.stakeRewardAmount
    );
  else
    stakeAmount = BigNumber.sum(stakeDetails.approvedAmount, stakeDetails.claimableAmount).minus(
      stakeDetails.stakeRewardAmount
    );

  return stakeAmount;
};

export const yourStakeDetails = stakeDetails => [
  {
    title: "Accepted Stake Amount",
    value: fromWei(getStakeAmount(stakeDetails)),
    unit: "AGIX",
    toolTip:
      "The amount of AGIX tokens that the network accepted from your stake. Any partial amounts not accepted by SNET Foundation will be automatically refunded to your account wallet.",
  },
  {
    title: "Reward Amount",
    value: fromWei(computeReward(stakeDetails)),
    unit: "AGIX",
    toolTip: "The amount of AGIX tokens you’ll earn as reward for your stake during this incubation period",
  },
  {
    title: "Refunded Amount",
    value: fromWei(stakeDetails.refundAmount),
    unit: "AGIX",
    toolTip:
      "When incubation period begins, SNET foundation will accept all or a partial amount of your stake amount. Unaccepted stake portions will be returned to your wallet account automatically (you will not be charged any transaction fee in this case).",
  },
];

export const stakeSessionDetails = stakeDetails => [
  {
    title: "Stakers",
    value: stakeDetails.numOfStakers,
    unit: "people",
    toolTip: "Current number of participants who have contributed AGIX tokens to the stake",
  },
  {
    title: "Current Pool Size",
    value: fromWei(
      stakeDetails.windowTotalStake === 0 ? stakeDetails.totalStakedAmount : stakeDetails.windowTotalStake
    ),
    unit: "AGIX",
    toolTip: "Total amount of AGIX tokens staked in the pool currently",
  },
  {
    title: "Reward Pool",
    value: fromWei(stakeDetails.rewardAmount),
    unit: "AGIX",
    toolTip: "Number of AGIX tokens that will be divided amongst all stakers as the reward for the current window",
  },
];

export const agreementDetails = {
  label: "Auto Renew to next stake session",
  description:
    "Renewing stakes (and rewards) to the next available stake session gives you priority over new stakers. Renewing stakes avoids the minimum and maximum AGIX requirements. Renewing saves you in ETH gas cost.",
};
