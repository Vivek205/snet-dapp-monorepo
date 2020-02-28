import { fromWei } from "../../Utils/GenHelperFunctions";

export const sortByCategories = [{ value: "newest", label: "Newest" }];

export const incubationProgressDetails = stakeDetails => ({
  startPeriod: stakeDetails.startPeriod,
  submissionEndPeriod: stakeDetails.submissionEndPeriod,
  endPeriod: stakeDetails.endPeriod,
});

export const cardDetails = stakeDetails => [
  {
    title: "Accepted Stack Amount",
    value: fromWei(stakeDetails.approvedAmount),
    unit: "AGI",
  },
  {
    title: "Reward Amount",
    value: "TBD??",
    unit: "AGI",
  },
  {
    title: "Refunded Amount",
    value: "TBD??",
    unit: "AGI",
  },
  {
    title: "Current Stakers",
    value: stakeDetails.numOfStakers,
    unit: "people",
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
