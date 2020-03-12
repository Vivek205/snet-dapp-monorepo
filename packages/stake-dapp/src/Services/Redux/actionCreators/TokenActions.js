import tokenABI from "singularitynet-token-contracts/abi/SingularityNetToken.json";
import tokenNetworks from "singularitynet-token-contracts/networks/SingularityNetToken.json";
import stakingNetworks from "../../../Utils/TokenStake/networks/TokenStake";

export const UPDATE_TOKEN_BALANCE = "UPDATE_TOKEN_BALANCE";
export const UPDATE_TOKEN_ALLOWANCE = "UPDATE_TOKEN_ALLOWANCE";

const getTokenContractAddress = () => {
  return tokenNetworks[process.env.REACT_APP_ETH_NETWORK].address;
};

const getStakingContractAddress = () => {
  return stakingNetworks[process.env.REACT_APP_ETH_NETWORK].address;
};

// Fetching The the Token Balance
export const updateTokenBalance = metamaskState => async dispatch => {
  var tokenBalance = 0;
  const tokenContractAddress = getTokenContractAddress();
  const accountAddress = metamaskState.account;

  if (metamaskState.isTxnsAllowed) {
    if (window.ethereum) {
      const ethereum = window.ethereum;
      window.web3 = new window.Web3(ethereum);

      const tokenInstance = window.web3.eth.contract(tokenABI).at(tokenContractAddress);

      await tokenInstance.balanceOf(accountAddress, { from: accountAddress }, (_err, result) => {
        tokenBalance = result.toString();
        dispatch({ type: UPDATE_TOKEN_BALANCE, payload: tokenBalance });
      });
    }
  } else {
    dispatch({ type: UPDATE_TOKEN_BALANCE, payload: tokenBalance });
  }
};

// Fetching The the Token Allowance
export const updateTokenAllowance = metamaskState => async dispatch => {
  var tokenAllowance = 0;
  const tokenContractAddress = getTokenContractAddress();
  const stakingContractAddress = getStakingContractAddress();
  const accountAddress = metamaskState.account;

  if (metamaskState.isTxnsAllowed) {
    if (window.ethereum) {
      const ethereum = window.ethereum;
      window.web3 = new window.Web3(ethereum);

      const tokenInstance = window.web3.eth.contract(tokenABI).at(tokenContractAddress);

      await tokenInstance.allowance(
        accountAddress,
        stakingContractAddress,
        { from: accountAddress },
        (_err, result) => {
          tokenAllowance = result.toString();
          dispatch({ type: UPDATE_TOKEN_ALLOWANCE, payload: tokenAllowance });
        }
      );
    }
  } else {
    dispatch({ type: UPDATE_TOKEN_ALLOWANCE, payload: tokenAllowance });
  }
};
