import { API } from "aws-amplify";
import { fetchAuthenticatedUser } from "./loginActions";
import { APIEndpoints, APIPaths } from "../../../AWS/APIEndpoints";
import { initializeAPIOptions } from "../../../../Utils/API";
import { APIError } from "shared/dist/utils/API";
import { loaderActions } from "../index";
import { LoaderContent } from "../../../../Utils/Loader";

export const SET_INDIVIDUAL_VERIFICATION_STATUS = "SET_INDIVIDUAL_VERIFICATION_STATUS";

export const setIndividualVerificationStatus = status => ({
  type: SET_INDIVIDUAL_VERIFICATION_STATUS,
  payload: status,
});

export const initiateVerificationAPI = () => async dispatch => {
  const { token } = await dispatch(fetchAuthenticatedUser());
  const apiName = APIEndpoints.VERIFICATION.name;
  const apiPath = APIPaths.USER_VERIFICATION_INITIATE;
  const apiOptions = initializeAPIOptions(token);
  return await API.post(apiName, apiPath, apiOptions);
};

export const initiateVerification = () => async dispatch => {
  try {
    dispatch(loaderActions.startAppLoader(LoaderContent.USER_VERIFICATION_INITIATE));
    const { error, data } = await dispatch(initiateVerificationAPI());
    if (error.code) {
      throw APIError(error.message);
    }
    dispatch(loaderActions.stopAppLoader());
    return data;
  } catch (e) {
    dispatch(loaderActions.stopAppLoader());
    throw e;
  }
  // TODO initate the verification process for jumio and redirect to jumio screen
};
