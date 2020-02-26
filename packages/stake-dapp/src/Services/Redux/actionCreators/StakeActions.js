import { API } from "aws-amplify";

import { APIError } from "shared/dist/utils/API";

import { APIEndpoints, APIPaths } from "../../AWS/APIEndpoints";
import { initializeAPIOptions } from "../../../Utils/API";
import { fetchAuthenticatedUser } from "./userActions/loginActions";

export const UPDATE_ACTIVE_STAKE_WINDOW = "UPDATE_ACTIVE_STAKE_WINDOW";

export const setActiveStakeWindowDetails = stakeWindowDetails => ({
  type: UPDATE_ACTIVE_STAKE_WINDOW,
  payload: stakeWindowDetails,
});

const fetchCurrentActiveStakeWindowAPI = metamaskDetails => async dispatch => {
  let staker = "0x0";
  const status = "OPEN";
  if (metamaskDetails.isTxnsAllowed) {
    staker = metamaskDetails.account;
  }

  const { token } = await dispatch(fetchAuthenticatedUser());
  const apiName = APIEndpoints.STAKE.name;
  const apiPath = APIPaths.ACTIVE_STAKE_WINDOW(status, staker);
  const apiOptions = initializeAPIOptions(token);
  return await API.get(apiName, apiPath, apiOptions);
};

export const fetchCurrentActiveStakeWindow = metamaskDetails => async dispatch => {
  try {
    //dispatch(loaderActions.startRequestLoader);

    const { data, error } = await dispatch(fetchCurrentActiveStakeWindowAPI(metamaskDetails));
    if (error.code) {
      throw new APIError(error.message);
    }
    //console.log("fetchCurrentActiveStakeWindow - ", data);
    const stakeWindowDetails = parseAndTransformStakeWindow(data[0]);
    dispatch(setActiveStakeWindowDetails(stakeWindowDetails));

    //dispatch(loaderActions.stopRequestLoader);
  } catch (error) {
    //dispatch(loaderActions.stopRequestLoader);
    throw error;
  }
};

const parseAndTransformStakeWindow = data => {
  const stakeWindowDetails = {
    stakeMapIndex: data.blockchain_id,
    startPeriod: data.start_period,
    submissionEndPeriod: data.submission_end_period,
    approvalEndPeriod: data.approval_end_period,
    requestWithdrawStartPeriod: data.request_withdraw_start_period,
    endPeriod: data.end_period,
    minStake: data.min_stake,
    maxStake: data.max_stake,
    windowMaxCap: data.window_max_cap,
    openForExternal: data.open_for_external,
    windowTotalStake: data.total_stake,
    rewardAmount: data.reward_amount,
    tokenOperator: data.token_operator,
    totalStakers: 0,
    totalStakedAmount: 0,
    myStake: 0,
  };

  return stakeWindowDetails;
};

// TODO - Sample Structured returned from the API - TO BE Deleted from this file after the complete implementation:

/* 
blockchain_id: 100
start_period: 1582542242
submission_end_period: 1582742242
approval_end_period: 1582842242
request_withdraw_start_period: 1583142242
end_period: 1583242242
min_stake: 100000000
max_stake: 1000000000000
window_max_cap: 100000000000000
open_for_external: true
total_stake: 0
reward_amount: 100000
token_operator: "0x0"
*/
