import { API } from "aws-amplify";
import { APIEndpoints, APIPaths } from "../../AWS/APIEndpoints";
import { initializeAPIOptions } from "../../../Utils/API";
import { fetchAuthenticatedUser } from "./userActions/loginActions";

export const SET_ONE_BASIC_DETAIL = "SET_ONE_BASIC_DETAIL";

export const setOneBasicDetail = (name, value) => ({ type: SET_ONE_BASIC_DETAIL, payload: { [name]: value } });

export const finishLater = payload => async () => {
  const { token } = await fetchAuthenticatedUser();
  const apiName = APIEndpoints.REGISTRY.name;
  const apiPath = APIPaths.FINISH_LATER;
  const postObj = payload;
  const apiOptions = initializeAPIOptions(token, postObj);
  await API.post(apiName, apiPath, apiOptions);
};
