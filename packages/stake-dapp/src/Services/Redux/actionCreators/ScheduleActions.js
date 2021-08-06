import { API } from "aws-amplify";

import { APIEndpoints, APIPaths } from "../../AWS/APIEndpoints";
import { initializeAPIOptions } from "../../../Utils/API";
import { fetchAuthenticatedUser } from "./userActions/loginActions";
import { loaderActions } from "./";

import { APIError } from "shared/dist/utils/API";

const fetchUpcomingSessionsAPI = () => async dispatch => {
  const { token } = await dispatch(fetchAuthenticatedUser());
  const apiName = APIEndpoints.STAKE.name;
  const apiPath = APIPaths.UPCOMING_SESSION;
  const apiOptions = initializeAPIOptions(token);
  return await API.get(apiName, apiPath, apiOptions);
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
