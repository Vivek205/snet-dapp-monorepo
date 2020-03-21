import { stakeActions } from "../actionCreators";

const InitialRequestDetails = {
  stakeBalance: 0,
  stakeSummary: {
    incubatingCount: 0,
    readyToClaimCount: 0,
  },
  activeStake: {
    stakeMapIndex: 0,
    startPeriod: 0,
    submissionEndPeriod: 0,
    approvalEndPeriod: 0,
    requestWithdrawStartPeriod: 0,
    endPeriod: 0,
    minStake: 0,
    maxStake: 0,
    windowMaxCap: 0,
    openForExternal: false,
    windowTotalStake: 0,
    rewardAmount: 0,
    tokenOperator: "0x0",
    totalStakers: 0,
    totalStakedAmount: 0,
    myStake: 0,
    autoRenewal: true,
  },
  incubationStakes: [],
  claimStakes: [],
  myTransactions: [],
  recentStakeWindow: {
    startPeriod: 0,
    submissionEndPeriod: 0,
    approvalEndPeriod: 0,
    requestWithdrawStartPeriod: 0,
    endPeriod: 0,
    minStake: 0,
    maxStake: 0,
    windowMaxCap: 0,
    openForExternal: false,
    windowTotalStake: 0,
    windowRewardAmount: 0,
  },
};

const stakeReducer = (state = InitialRequestDetails, action) => {
  switch (action.type) {
    case stakeActions.UPDATE_STAKE_BALANCE: {
      return { ...state, stakeBalance: action.payload };
    }
    case stakeActions.UPDATE_STAKE_SUMMARY: {
      return { ...state, stakeSummary: { ...state.stakeSummary, ...action.payload } };
    }
    case stakeActions.UPDATE_ACTIVE_STAKE_WINDOW: {
      return { ...state, activeStake: action.payload };
    }
    case stakeActions.UPDATE_ACTIVE_STAKE_WINDOW_BLOCKCHAIN: {
      return {
        ...state,
        activeStake: {
          ...state.activeStake,
          myStake: action.payload.myStake,
          autoRenewal: action.payload.autoRenewal,
          userExist: action.payload.userExist,
        },
      };
    }
    case stakeActions.UPDATE_ACTIVE_STAKES: {
      return { ...state, incubationStakes: action.payload };
    }
    case stakeActions.UPDATE_CLAIM_STAKES: {
      return { ...state, claimStakes: action.payload };
    }
    case stakeActions.UPDATE_STAKE_TRANSACTIONS: {
      return { ...state, myTransactions: action.payload };
    }
    case stakeActions.UPDATE_RECENT_STAKE_WINDOW_BLOCKCHAIN: {
      return { ...state, recentStakeWindow: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default stakeReducer;
