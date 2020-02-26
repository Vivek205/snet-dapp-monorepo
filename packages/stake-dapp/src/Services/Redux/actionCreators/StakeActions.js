import { API } from "aws-amplify";

import { APIError } from "shared/dist/utils/API";

import { APIEndpoints, APIPaths } from "../../AWS/APIEndpoints";
import { initializeAPIOptions } from "../../../Utils/API";
import { fetchAuthenticatedUser } from "./userActions/loginActions";

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
    //TODO - Check the error condition
    if (error.code || !data) {
      throw new APIError(error.message);
    }
    //console.log("fetchCurrentActiveStakeWindow - ", data);
    // TODO - Call dispatch Update the Redux Store with the values

    //dispatch(loaderActions.stopRequestLoader);
  } catch (error) {
    //dispatch(loaderActions.stopRequestLoader);
    throw error;
  }
};
