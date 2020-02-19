import { API } from "aws-amplify";
import { fetchAuthenticatedUser } from "./loginActions";
import { APIEndpoints, APIPaths } from "../../../AWS/APIEndpoints";
import { initializeAPIOptions } from "../../../../Utils/API";

export const SET_INDIVIDUAL_VERIFICATION_STATUS = "SET_INDIVIDUAL_VERIFICATION_STATUS";

export const setIndividualVerificationStatus = status => ({
  type: SET_INDIVIDUAL_VERIFICATION_STATUS,
  payload: status,
});

export const initiateVerificationAPI = () => async dispatch => {
  const { token } = await dispatch(fetchAuthenticatedUser());
  const apiName = APIEndpoints.REGISTRY.name;
  const apiPath = APIPaths.ORG_SETUP;
  const apiOptions = initializeAPIOptions(token);
  return await API.post(apiName, apiPath, apiOptions);
};

export const initiateVerification = () => {
  // TODO initate the verification process for jumio and redirect to jumio screen
};
