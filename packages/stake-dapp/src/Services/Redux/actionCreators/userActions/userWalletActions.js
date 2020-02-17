import { API } from "aws-amplify";
import isEmpty from "lodash/isEmpty";
import { APIEndpoints, APIPaths } from "../../../AWS/APIEndpoints";
import { initializeAPIOptions } from "../../../../Utils/API";
import { fetchAuthenticatedUser } from "./loginActions";

export const SET_WALLET_LIST = "SET_WALLET_LIST";

// Fetch User Wallet Association Details
const fetchWalletAPI = token => {
  const apiName = APIEndpoints.ORCHESTRATOR.name;
  const apiPath = APIPaths.WALLET;
  const apiOptions = initializeAPIOptions(token);
  return API.get(apiName, apiPath, apiOptions);
};

export const fetchWallet = () => async dispatch => {
  const { token } = await dispatch(fetchAuthenticatedUser());
  const response = await fetchWalletAPI(token);

  return dispatch(fetchWalletSuccess(response));
};

const fetchWalletSuccess = response => dispatch => {
  if (!isEmpty(response.data.wallets)) {
    dispatch(updateWalletList(response.data.wallets));
  }
};

const updateWalletList = data => dispatch => {
  dispatch({ type: SET_WALLET_LIST, payload: data });
};

// Associate the wallet to User - Set Wallet List in the backend
const registerWalletAPI = (token, address) => {
  const apiName = APIEndpoints.ORCHESTRATOR.name;
  const apiPath = APIPaths.REGISTER_WALLET;
  const type = "METAMASK";
  const postObj = { address, type };
  const apiOptions = initializeAPIOptions(token, postObj);
  return API.post(apiName, apiPath, apiOptions);
};

export const registerWallet = address => async dispatch => {
  try {
    const { token } = await dispatch(fetchAuthenticatedUser());
    await registerWalletAPI(token, address);
    dispatch(registerWalletSuccess());
  } catch (exp) {
    // This request is fire and forget as it works in the backgroud for now
    // Update the list in case if User address is added from other portal at the same time
    dispatch(fetchWallet());
  }
};

const registerWalletSuccess = () => dispatch => {
  // On Success Update the Wallet List
  dispatch(fetchWallet());
};
