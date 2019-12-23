import { API } from "aws-amplify";
import { APIEndpoints, APIPaths } from "../../AWS/APIEndpoints";
import { initializeAPIOptions } from "../../../Utils/API";
import { fetchAuthenticatedUser } from "./userActions/loginActions";
import { loaderActions } from "./";
import { LoaderContent } from "../../../Utils/Loader";

export const SET_ONE_BASIC_DETAIL = "SET_ONE_BASIC_DETAIL";

export const setOneBasicDetail = (name, value) => ({ type: SET_ONE_BASIC_DETAIL, payload: { [name]: value } });

export const finishLaterAPI = async payload => {
  const { token } = await fetchAuthenticatedUser();
  const apiName = APIEndpoints.REGISTRY.name;
  const apiPath = APIPaths.FINISH_LATER;
  const postObj = payload;
  const apiOptions = initializeAPIOptions(token, postObj);
  return await API.post(apiName, apiPath, apiOptions);
};

export const finishLater = payload => async dispatch => {
  try {
    dispatch(loaderActions.startAppLoader(LoaderContent.ORG_SETUP_FINISH_LATER));
    await finishLaterAPI(payload);
    dispatch(loaderActions.stopAppLoader());
  } catch (error) {
    dispatch(loaderActions.stopAppLoader());
    throw error;
  }
};
