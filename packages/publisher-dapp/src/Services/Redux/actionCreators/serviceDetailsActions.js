import { API } from "aws-amplify";
//import isEmpty from "lodash/isEmpty";

import { fetchAuthenticatedUser } from "./userActions/loginActions";
import { APIEndpoints, APIPaths } from "../../AWS/APIEndpoints";
import { initializeAPIOptions } from "../../../Utils/API";
import { APIError } from "shared/dist/utils/API";
import { loaderActions } from "./";
import { LoaderContent } from "../../../Utils/Loader";

export const SET_AI_SERVICE_NAME = "SET_AI_SERVICE_NAME";
export const SET_AI_SERVICE_UUID = "SET_AI_SERVICE_UUID";

export const setServiceName = serviceName => ({
  type: SET_AI_SERVICE_NAME,
  payload: serviceName,
});

const setServiceUuid = serviceUuid => ({
  type: SET_AI_SERVICE_UUID,
  payload: serviceUuid,
});

const createServiceAPI = (orgUuid, serviceName) => async dispatch => {
  const { token } = await dispatch(fetchAuthenticatedUser());
  const apiName = APIEndpoints.REGISTRY.name;
  const apiPath = APIPaths.APIPaths.AI_CREATE_SERVICE(orgUuid);
  const body = { service_name: serviceName };
  const apiOptions = initializeAPIOptions(token, body);
  return await API.post(apiName, apiPath, apiOptions);
};

export const createService = (orgUuid, serviceName) => async dispatch => {
  try {
    dispatch(loaderActions.startAppLoader(LoaderContent.CREATE_SERVICE));
    const { data, error } = await dispatch(createServiceAPI(orgUuid, serviceName));
    if (error.code) {
      throw new APIError(error.message);
    }
    dispatch(setServiceName(serviceName));
    dispatch(setServiceUuid(data.service_uuid));
    dispatch(loaderActions.stopAppLoader());
  } catch (error) {
    dispatch(loaderActions.stopAppLoader());
    throw error;
  }
};
