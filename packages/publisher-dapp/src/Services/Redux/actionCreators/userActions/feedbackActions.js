import { API } from "aws-amplify";
import { fetchAuthenticatedUser } from "./loginActions";
import { APIEndpoints, APIPaths } from "../../../AWS/APIEndpoints";
import { initializeAPIOptions } from "../../../../Utils/API";
import { clientTypesUtility } from "shared/dist/utils/clientTypes";

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
