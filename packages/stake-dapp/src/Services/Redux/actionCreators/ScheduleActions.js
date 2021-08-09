import { API } from "aws-amplify";

import { APIEndpoints, APIPaths } from "../../AWS/APIEndpoints";
import { loaderActions } from "./";

import { APIError } from "shared/dist/utils/API";

const fetchScheduleSessionsAPI = () => async () => {
  const apiName = APIEndpoints.STAKE.name;
  const apiPath = APIPaths.SCHEDULE_SESSION;
  return await API.get(apiName, apiPath);
};

export const fetchScheduleSessions = () => async dispatch => {
  try {
    dispatch(loaderActions.startTxnStakeLoader());
    const { data, error } = await dispatch(fetchScheduleSessionsAPI());
    if (error.code) {
      throw new APIError(error.message);
    }
    dispatch(loaderActions.stopTxnStakeLoader());
    return data;
  } catch (error) {
    dispatch(loaderActions.stopTxnStakeLoader());
    throw error;
  }
};
