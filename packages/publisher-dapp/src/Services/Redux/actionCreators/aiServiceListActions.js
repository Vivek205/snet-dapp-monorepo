import { API } from "aws-amplify";
import isEmpty from "lodash/isEmpty";

import { fetchAuthenticatedUser } from "./userActions/loginActions";
import { APIEndpoints, APIPaths } from "../../AWS/APIEndpoints";
import { initializeAPIOptions } from "../../../Utils/API";
import { APIError } from "shared/dist/utils/API";
import { loaderActions } from "./";
import { defaultPagination } from "../reducers/aiServiceListReducer";

export const SET_AI_SERVICE_LIST = "SET_AI_SERVICE_LIST";
export const SET_AI_SERVICE_LIST_PAGINATION = "SET_AI_SERVICE_LIST_PAGINATION";
export const SET_AI_SERVICE_LIST_TOTAL_COUNT = "SET_AI_SERVICE_LIST_TOTAL_COUNT";
export const SET_RECENTLY_PUBLISHED_SERVICE = "SET_RECENTLY_PUBLISHED_SERVICE";

const setAiServiceList = aiServiceList => ({
  type: SET_AI_SERVICE_LIST,
  payload: aiServiceList,
});

export const setAiServiceListPagination = pagination => ({
  type: SET_AI_SERVICE_LIST_PAGINATION,
  payload: pagination,
});

export const setAiServiceListTotalCount = totalCount => ({
  type: SET_AI_SERVICE_LIST_TOTAL_COUNT,
  payload: totalCount,
});

export const setRecentlyPublishedService = serviceName => ({
  type: SET_RECENTLY_PUBLISHED_SERVICE,
  payload: serviceName,
});

const getAiServiceListAPI = (orgUuid, pagination) => async dispatch => {
  const { token } = await dispatch(fetchAuthenticatedUser());
  const apiName = APIEndpoints.REGISTRY.name;
  const apiPath = APIPaths.AI_SERVICE_LIST(orgUuid);
  const apiOptions = initializeAPIOptions(token, pagination);
  return await API.post(apiName, apiPath, apiOptions);
};

const parseGroups = groups => {
  const parsePricing = pricing =>
    pricing.map(price => ({ default: price.default, priceModel: price.price_model, priceInCogs: price.price_in_cogs }));

  return groups.map(group => ({
    id: group.group_id,
    name: group.group_name,
    pricing: parsePricing(group.pricing),
    endpoints: group.endpoints,
    freeCallsAllowed: group.free_calls,
    freeCallSignerAddress: group.free_call_signer_address,
    testEndpoints: group.test_endpoints,
    daemonAddresses: group.daemon_addresses,
  }));
};

const parseAiServiceData = service => ({
  orgUuid: service.org_uuid,
  uuid: service.service_uuid,
  id: service.service_id,
  serviceState: service.service_state,
  displayName: service.display_name,
  shortDescription: service.short_description,
  description: service.description,
  projectUrl: service.project_url,
  assets: {
    heroImage: isEmpty(service.assets.hero_image)
      ? {}
      : { url: service.assets.hero_image.url, ipfsHash: service.assets.hero_image.ipfs_hash },
    protoFiles: isEmpty(service.assets.proto_files)
      ? {}
      : { url: service.assets.proto_files.url, ipfsHash: service.assets.proto_files.ipfs_hash },
    demoFiles: isEmpty(service.assets.demo_files)
      ? {}
      : { url: service.assets.demo_files.url, ipfsHash: service.assets.demo_files.ipfs_hash },
  },
  rating: isEmpty(service.rating)
    ? {}
    : { rating: service.rating.rating, totalUsersRated: service.rating.total_users_rated },
  ranking: service.ranking,
  contributors: isEmpty(service.contributors) ? [] : service.contributors.map(c => c.name).join(","),
  groups: isEmpty(service.groups) ? [] : parseGroups(service.groups),
  tags: service.tags,
  comments: {
    SERVICE_APPROVER: isEmpty(service.comments) ? "" : service.comments.SERVICE_APPROVER,
  },
});

const parseAiServiceListResponse = response => response.map(parseAiServiceData);

export const getAiServiceList = (orgUuid, pagination = defaultPagination) => async dispatch => {
  try {
    dispatch(loaderActions.startAiServiceListLoader());
    const { data, error } = await dispatch(getAiServiceListAPI(orgUuid, pagination));
    if (error.code) {
      throw new APIError(error.message);
    }
    const { result, total_count: totalCount } = data;
    dispatch(setAiServiceListTotalCount(totalCount));
    const aiServiceList = parseAiServiceListResponse(result);
    dispatch(setAiServiceList(aiServiceList));
    dispatch(loaderActions.stopAiServiceListLoader());
    return aiServiceList;
  } catch (error) {
    dispatch(loaderActions.stopAiServiceListLoader());
    throw error;
  }
};
