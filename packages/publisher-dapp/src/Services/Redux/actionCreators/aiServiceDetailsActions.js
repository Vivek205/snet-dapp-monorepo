import { API } from "aws-amplify";

import { fetchAuthenticatedUser } from "./userActions/loginActions";
import { APIEndpoints, APIPaths } from "../../AWS/APIEndpoints";
import { initializeAPIOptions } from "../../../Utils/API";
import { APIError } from "shared/dist/utils/API";
import { loaderActions } from "./";
import { LoaderContent } from "../../../Utils/Loader";

export const SET_AI_SERVICE_ID = "SET_AI_SERVICE_ID";
export const SET_AI_SERVICE_ID_AVAILABILITY = "SET_AI_SERVICE_ID_AVAILABILITY";
export const SET_AI_SERVICE_NAME = "SET_AI_SERVICE_NAME";
export const SET_AI_SERVICE_UUID = "SET_AI_SERVICE_UUID";
export const SET_AI_SERVICE_ENDPOINTS = "SET_AI_SERVICE_ENDPOINTS";

export const setServiceId = serviceId => ({
  type: SET_AI_SERVICE_ID,
  payload: serviceId,
});

const setServiceAvailability = serviceAvailability => ({
  type: SET_AI_SERVICE_ID_AVAILABILITY,
  payload: serviceAvailability,
});

const setServiceName = serviceName => ({
  type: SET_AI_SERVICE_NAME,
  payload: serviceName,
});

const setServiceUuid = serviceUuid => ({
  type: SET_AI_SERVICE_UUID,
  payload: serviceUuid,
});

export const setAiServiceEndpoints = endpoints => ({ type: SET_AI_SERVICE_ENDPOINTS, payload: endpoints });

const createServiceAPI = (orgUuid, serviceName) => async dispatch => {
  const { token } = await dispatch(fetchAuthenticatedUser());
  const apiName = APIEndpoints.REGISTRY.name;
  const apiPath = APIPaths.AI_CREATE_SERVICE(orgUuid);
  const body = { display_name: serviceName };
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

const validateServiceIdAPI = (orgUuid, serviceId) => async dispatch => {
  const { token } = await dispatch(fetchAuthenticatedUser());
  const apiName = APIEndpoints.REGISTRY.name;
  const apiPath = APIPaths.AI_SERVICE_ID_VALIDATE(orgUuid, serviceId);
  const apiOptions = initializeAPIOptions(token);
  return await API.get(apiName, apiPath, apiOptions);
};

export const validateServiceId = (orgUuid, serviceId) => async dispatch => {
  try {
    const { data, error } = await dispatch(validateServiceIdAPI(orgUuid, serviceId));
    if (error.code) {
      throw new APIError(error.message);
    }
    dispatch(setServiceAvailability(data));
  } catch (error) {
    dispatch(setServiceAvailability(undefined)); // In Case of error setting it to undefined
    throw error;
  }
};
