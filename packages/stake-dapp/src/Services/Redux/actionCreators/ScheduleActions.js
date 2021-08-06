import { API } from "aws-amplify";

import { APIEndpoints, APIPaths } from "../../AWS/APIEndpoints";
import { loaderActions } from "./";

import { APIError } from "shared/dist/utils/API";

const fetchUpcomingSessionsAPI = () => async () => {
  const apiName = APIEndpoints.STAKE.name;
  const apiPath = APIPaths.UPCOMING_SESSION;
  return await API.get(apiName, apiPath);
};

export const fetchUpcomingSessions = () => async dispatch => {
  try {
    dispatch(loaderActions.startSessionLoader());
    const { data, error } = await dispatch(fetchUpcomingSessionsAPI());
    if (error.code) {
      throw new APIError(error.message);
    }
    dispatch(loaderActions.stopSessionLoader());
    return data;
  } catch (error) {
    dispatch(loaderActions.stopSessionLoader());
    throw error;
  }
};
