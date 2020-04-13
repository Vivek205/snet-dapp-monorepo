import { API } from "aws-amplify";
import { fetchAuthenticatedUser } from "./loginActions";
import { APIEndpoints, APIPaths } from "../../../AWS/APIEndpoints";
import { initializeAPIOptions } from "../../../../Utils/API";
import { clientTypesUtility } from "shared/dist/utils/clientTypes";
import { APIError } from "shared/dist/utils/API";

const slackFeedbackAPI = body => async dispatch => {
  const { token } = await dispatch(fetchAuthenticatedUser());
  const apiName = APIEndpoints.UTILITY.name;
  const apiPath = APIPaths.SEND_SLACK_FEEDBACK;
  const queryParams = { client: clientTypesUtility.PUBLISHER };
  const apiOptions = initializeAPIOptions(token, body, queryParams);
  return API.post(apiName, apiPath, apiOptions);
};

export const sendSlackFeedback = payload => async dispatch => {
  await dispatch(slackFeedbackAPI(payload));
};

const uploadSlackAttachmentAPI = (assetType, fileBlob) => async dispatch => {
  const { token } = await dispatch(fetchAuthenticatedUser());
  const url = `${APIEndpoints.UTILITY.endpoint}${APIPaths.UPLOAD_FILE}?type=${assetType}`;
  const res = await fetch(url, { method: "POST", headers: { authorization: token }, body: fileBlob });
  return await res.json();
};

export const uploadSlackAttachment = (assetType, fileBlob) => async dispatch => {
  const { data, error } = await dispatch(uploadSlackAttachmentAPI(assetType, fileBlob));
  if (error.code) {
    throw new APIError(error.message);
  }
  return data.url;
};
