import { API } from "aws-amplify";

import { fetchAuthenticatedUser } from "./userActions/loginActions";
import { APIEndpoints, APIPaths } from "../../AWS/APIEndpoints";
import { initializeAPIOptions } from "../../../Utils/API";
import { APIError } from "shared/dist/utils/API";
import { loaderActions } from "./";

export const SET_AI_SERVICE_LIST = "SET_AI_SERVICE_LIST";

const setAiServiceList = aiServiceList => ({
  type: SET_AI_SERVICE_LIST,
  payload: aiServiceList,
});

const getAiServiceListAPI = orgUuid => async dispatch => {
  const { token } = dispatch(fetchAuthenticatedUser());
  const apiName = APIEndpoints.REGISTRY.name;
  const apiPath = APIPaths.AI_SERVICE_LIST(orgUuid);
  const apiOptions = initializeAPIOptions(token);
  return await API.get(apiName, apiPath, apiOptions);
};

const parseAiServiceListResponse = response => response;

export const getAiServiceList = orgUuid => async dispatch => {
  try {
    dispatch(loaderActions.startAiServiceListLoader());
    const { data, error } = await dispatch(getAiServiceListAPI(orgUuid));
    if (error.code) {
      throw new APIError(error.message);
    }
    const aiServiceList = parseAiServiceListResponse(data);
    dispatch(setAiServiceList(aiServiceList));
    dispatch(loaderActions.stopAiServiceListLoader());
  } catch (error) {
    dispatch(loaderActions.stopAiServiceListLoader());
    throw error;
  }
};
