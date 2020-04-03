import Web3 from "web3";
import tokenABI from "singularitynet-token-contracts/abi/SingularityNetToken.json";
import tokenNetworks from "singularitynet-token-contracts/networks/SingularityNetToken.json";

import stakingNetworks from "singularitynet-stake-contracts/networks/TokenStake";
import stakingABI from "singularitynet-stake-contracts/abi/TokenStake";

import { toBigNumber } from "./GenHelperFunctions";

export const blockChainEvents = {
  TRANSACTION_HASH: "transactionHash",
  RECEIPT: "receipt",
  CONFIRMATION: "confirmation",
  ERROR: "error",
};

// TODO - Come up with a different approach here....
export const waitForTransaction = async hash => {
  let receipt;

  const ethereum = window.ethereum;
  window.web3 = new window.Web3(ethereum);
  const web3 = new Web3(window.web3.currentProvider);

  while (!receipt) {
    // eslint-disable-next-line no-await-in-loop
    try {
      // eslint-disable-next-line require-atomic-updates
      receipt = await web3.eth.getTransactionReceipt(hash);

      //console.log(" receipt - ", receipt);
    } catch (_error) {
      // Do Nothing
      //console.log("error - ", error);
    }
  }

  return new Promise((resolve, reject) => {
    if (!receipt.status) {
      reject(receipt);
    }
    resolve(receipt);
  });
};

// Approve AGI Token for the Staking Contract Address
export const approveToken = (metamaskDetails, amountBN) => {
  const tokenContractAddress = getTokenContractAddress();
  const stakingContractAddress = getStakingContractAddress();
  const accountAddress = metamaskDetails.account;

  const ethereum = window.ethereum;
  window.web3 = new window.Web3(ethereum);

  const tokenInstance = window.web3.eth.contract(tokenABI).at(tokenContractAddress);

  return new Promise((resolve, reject) => {
    tokenInstance.approve(stakingContractAddress, amountBN.toString(), { from: accountAddress }, (err, hash) => {
      if (err) {
        reject(hash);
      }
      resolve(hash);
    });
  });
};

export const approveTokenV2 = (metamaskDetails, amountBN) => {
  const tokenContractAddress = getTokenContractAddress();
  const stakingContractAddress = getStakingContractAddress();
  const accountAddress = metamaskDetails.account;

  try {
    const ethereum = window.ethereum;
    window.web3 = new window.Web3(ethereum);

    const web3 = new Web3(window.web3.currentProvider);
    const tokenInstance = new web3.eth.Contract(tokenABI, tokenContractAddress);

    return new Promise((resolve, reject) => {
      const method = tokenInstance.methods
        .approve(stakingContractAddress, amountBN.toString())
        .send({ from: accountAddress })
        .once(blockChainEvents.CONFIRMATION, async () => {
          resolve();
          await method.off();
        })
        .on(blockChainEvents.ERROR, error => {
          reject(error);
        });
    });
  } catch (error) {
    throw error;
  }
};

export const createStakePeriod = (
  metamaskDetails,
  startPeriod,
  endSubmission,
  endApproval,
  requestWithdrawStartPeriod,
  endPeriod,
  rewardAmount,
  maxCap,
  minStake,
  maxStake,
  openForExternal
) => {
  const stakingContractAddress = getStakingContractAddress();
  const accountAddress = metamaskDetails.account;

  const ethereum = window.ethereum;
  window.web3 = new window.Web3(ethereum);

  const stakingInstance = window.web3.eth.contract(stakingABI).at(stakingContractAddress);

  return new Promise((resolve, reject) => {
    stakingInstance.openForStake(
      startPeriod,
      endSubmission,
      endApproval,
      requestWithdrawStartPeriod,
      endPeriod,
      rewardAmount,
      maxCap,
      minStake,
      maxStake,
      openForExternal,
      { from: accountAddress },
      (err, hash) => {
        if (err) {
          reject(hash);
        }
        resolve(hash);
      }
    );
  });
};

// Function to create a new stake in the Current Stake Window
export const submitStake = (metamaskDetails, stakeAmount, autoRenewal) => {
  const stakingContractAddress = getStakingContractAddress();
  const accountAddress = metamaskDetails.account;

  const ethereum = window.ethereum;
  window.web3 = new window.Web3(ethereum);
  const stakingInstance = window.web3.eth.contract(stakingABI).at(stakingContractAddress);

  return new Promise((resolve, reject) => {
    stakingInstance.submitStake(stakeAmount.toString(), autoRenewal, { from: accountAddress }, (err, hash) => {
      if (err) {
        reject(hash);
      }
      resolve(hash);
    });
  });
};

export const submitStakeV2 = (metamaskDetails, stakeAmount, autoRenewal) => {
  const accountAddress = metamaskDetails.account;

  try {
    const stakingInstance = getStakingInstance();

    return new Promise((resolve, reject) => {
      const method = stakingInstance.methods
        .submitStake(stakeAmount.toString(), autoRenewal)
        .send({ from: accountAddress })
        .once(blockChainEvents.CONFIRMATION, async () => {
          resolve();
          await method.off();
        })
        .on(blockChainEvents.ERROR, error => {
          reject(error);
        });
    });
  } catch (error) {
    throw error;
  }
};

export const approveStake = (metamaskDetails, staker, approvedAmount) => {
  const stakingContractAddress = getStakingContractAddress();
  const accountAddress = metamaskDetails.account;

  const ethereum = window.ethereum;
  window.web3 = new window.Web3(ethereum);

  const stakingInstance = window.web3.eth.contract(stakingABI).at(stakingContractAddress);

  return new Promise((resolve, reject) => {
    stakingInstance.approveStake(staker, approvedAmount.toString(), { from: accountAddress }, (err, hash) => {
      if (err) {
        reject(hash);
      }
      resolve(hash);
    });
  });
};

export const rejectStake = (metamaskDetails, stakeMapIndex, staker) => {
  const stakingContractAddress = getStakingContractAddress();
  const accountAddress = metamaskDetails.account;

  const ethereum = window.ethereum;
  window.web3 = new window.Web3(ethereum);

  const stakingInstance = window.web3.eth.contract(stakingABI).at(stakingContractAddress);

  return new Promise((resolve, reject) => {
    stakingInstance.rejectStake(stakeMapIndex, staker, { from: accountAddress }, (err, hash) => {
      if (err) {
        reject(hash);
      }
      resolve(hash);
    });
  });
};

export const updateAutoRenewal = (metamaskDetails, stakeMapIndex, autoRenew) => {
  const stakingContractAddress = getStakingContractAddress();
  const accountAddress = metamaskDetails.account;

  const ethereum = window.ethereum;
  window.web3 = new window.Web3(ethereum);

  const stakingInstance = window.web3.eth.contract(stakingABI).at(stakingContractAddress);

  return new Promise((resolve, reject) => {
    stakingInstance.updateAutoRenewal(stakeMapIndex, autoRenew, { from: accountAddress }, (err, hash) => {
      if (err) {
        reject(hash);
      }
      resolve(hash);
    });
  });
};

export const updateAutoRenewalV2 = (metamaskDetails, stakeMapIndex, autoRenew) => {
  const accountAddress = metamaskDetails.account;

  try {
    const stakingInstance = getStakingInstance();

    return new Promise((resolve, reject) => {
      const method = stakingInstance.methods
        .updateAutoRenewal(stakeMapIndex, autoRenew)
        .send({ from: accountAddress })
        .once(blockChainEvents.CONFIRMATION, async () => {
          resolve();
          await method.off();
        })
        .on(blockChainEvents.ERROR, error => {
          reject(error);
        });
    });
  } catch (error) {
    throw error;
  }
};

export const claimStake = (metamaskDetails, stakeMapIndex) => {
  const stakingContractAddress = getStakingContractAddress();
  const accountAddress = metamaskDetails.account;

  const ethereum = window.ethereum;
  window.web3 = new window.Web3(ethereum);

  const stakingInstance = window.web3.eth.contract(stakingABI).at(stakingContractAddress);

  return new Promise((resolve, reject) => {
    stakingInstance.claimStake(stakeMapIndex, { from: accountAddress }, (err, hash) => {
      if (err) {
        reject(hash);
      }
      resolve(hash);
    });
  });
};

export const claimStakeV2 = (metamaskDetails, stakeMapIndex) => {
  const accountAddress = metamaskDetails.account;

  try {
    const stakingInstance = getStakingInstance();

    return new Promise((resolve, reject) => {
      const method = stakingInstance.methods
        .claimStake(stakeMapIndex)
        .send({ from: accountAddress })
        .once(blockChainEvents.CONFIRMATION, async () => {
          resolve();
          await method.off();
        })
        .on(blockChainEvents.ERROR, error => {
          reject(error);
        });
    });
  } catch (error) {
    throw error;
  }
};

// Only for Token Operator to withdraw Tokens from liquid pool
export const withdrawToken = (metamaskDetails, amountBN) => {
  const stakingContractAddress = getStakingContractAddress();
  const accountAddress = metamaskDetails.account;

  const ethereum = window.ethereum;
  window.web3 = new window.Web3(ethereum);

  const stakingInstance = window.web3.eth.contract(stakingABI).at(stakingContractAddress);

  return new Promise((resolve, reject) => {
    stakingInstance.withdrawToken(amountBN.toString(), { from: accountAddress }, (err, hash) => {
      if (err) {
        reject(hash);
      }
      resolve(hash);
    });
  });
};

// Only for Token Operator to Deposit Tokens to liquid Pool
export const depositToken = (metamaskDetails, amountBN) => {
  const stakingContractAddress = getStakingContractAddress();
  const accountAddress = metamaskDetails.account;

  const ethereum = window.ethereum;
  window.web3 = new window.Web3(ethereum);

  const stakingInstance = window.web3.eth.contract(stakingABI).at(stakingContractAddress);

  return new Promise((resolve, reject) => {
    stakingInstance.depositToken(amountBN.toString(), { from: accountAddress }, (err, hash) => {
      if (err) {
        reject(hash);
      }
      resolve(hash);
    });
  });
};

// Only for the token Operator
export const autoRenewStake = (metamaskDetails, existingStakeMapIndex, staker, approvedAmountBN) => {
  const stakingContractAddress = getStakingContractAddress();
  const accountAddress = metamaskDetails.account;

  const ethereum = window.ethereum;
  window.web3 = new window.Web3(ethereum);

  const stakingInstance = window.web3.eth.contract(stakingABI).at(stakingContractAddress);

  return new Promise((resolve, reject) => {
    stakingInstance.autoRenewStake(
      existingStakeMapIndex,
      staker,
      approvedAmountBN.toString(),
      { from: accountAddress },
      (err, hash) => {
        if (err) {
          reject(hash);
        }
        resolve(hash);
      }
    );
  });
};

export const renewStake = (metamaskDetails, existingStakeMapIndex, stakeAmountBN, autoRenewal) => {
  const stakingContractAddress = getStakingContractAddress();
  const accountAddress = metamaskDetails.account;

  const ethereum = window.ethereum;
  window.web3 = new window.Web3(ethereum);

  const stakingInstance = window.web3.eth.contract(stakingABI).at(stakingContractAddress);

  return new Promise((resolve, reject) => {
    stakingInstance.renewStake(
      existingStakeMapIndex,
      stakeAmountBN.toString(),
      autoRenewal,
      { from: accountAddress },
      (err, hash) => {
        if (err) {
          reject(hash);
        }
        resolve(hash);
      }
    );
  });
};

export const withdrawStake = (metamaskDetails, existingStakeMapIndex, stakeAmountBN) => {
  const stakingContractAddress = getStakingContractAddress();
  const accountAddress = metamaskDetails.account;

  const ethereum = window.ethereum;
  window.web3 = new window.Web3(ethereum);

  const stakingInstance = window.web3.eth.contract(stakingABI).at(stakingContractAddress);

  return new Promise((resolve, reject) => {
    stakingInstance.withdrawStake(
      existingStakeMapIndex,
      stakeAmountBN.toString(),
      { from: accountAddress },
      (err, hash) => {
        if (err) {
          reject(hash);
        }
        resolve(hash);
      }
    );
  });
};

export const withdrawStakeV2 = (metamaskDetails, existingStakeMapIndex, stakeAmountBN) => {
  const accountAddress = metamaskDetails.account;

  try {
    const stakingInstance = getStakingInstance();

    return new Promise((resolve, reject) => {
      const method = stakingInstance.methods
        .withdrawStake(existingStakeMapIndex, stakeAmountBN.toString())
        .send({ from: accountAddress })
        .once(blockChainEvents.CONFIRMATION, async () => {
          resolve();
          await method.off();
        })
        .on(blockChainEvents.ERROR, error => {
          reject(error);
        });
    });
  } catch (error) {
    throw error;
  }
};

// Can be done only by owner
export const updateOwner = (metamaskDetails, newOwner) => {
  const stakingContractAddress = getStakingContractAddress();
  const accountAddress = metamaskDetails.account;

  const ethereum = window.ethereum;
  window.web3 = new window.Web3(ethereum);

  const stakingInstance = window.web3.eth.contract(stakingABI).at(stakingContractAddress);

  return new Promise((resolve, reject) => {
    stakingInstance.updateOwner(newOwner, { from: accountAddress }, (err, hash) => {
      if (err) {
        reject(hash);
      }
      resolve(hash);
    });
  });
};

export const updateOperator = (metamaskDetails, tokenOperator) => {
  const stakingContractAddress = getStakingContractAddress();
  const accountAddress = metamaskDetails.account;

  const ethereum = window.ethereum;
  window.web3 = new window.Web3(ethereum);

  const stakingInstance = window.web3.eth.contract(stakingABI).at(stakingContractAddress);

  return new Promise((resolve, reject) => {
    stakingInstance.updateOperator(tokenOperator, { from: accountAddress }, (err, hash) => {
      if (err) {
        reject(hash);
      }
      resolve(hash);
    });
  });
};

// Read Operation for this method is performed using the Infura Call as Metamask web3 has a bug
export const getStakeInfo = async (metamaskDetails, stakeMapIndex) => {
  const stakingContractAddress = getStakingContractAddress();
  const accountAddress = metamaskDetails.account;

  const web3 = new Web3(process.env.REACT_APP_INFURA_ENDPOINT);

  const stakingInstance = new web3.eth.Contract(stakingABI, stakingContractAddress);

  const result = await stakingInstance.methods
    .getStakeInfo(toBigNumber(stakeMapIndex).toString(), accountAddress)
    .call();

  return result;
};

export const getRecentStakeWindow = async () => {
  const stakingContractAddress = getStakingContractAddress();

  const web3 = new Web3(process.env.REACT_APP_INFURA_ENDPOINT);

  const stakingInstance = new web3.eth.Contract(stakingABI, stakingContractAddress);

  const currentStakeMapIndex = await stakingInstance.methods.currentStakeMapIndex().call();

  const result = await stakingInstance.methods.stakeMap(currentStakeMapIndex).call();

  return result;
};

export const getUserStakeBalance = metamaskDetails => {
  const stakingContractAddress = getStakingContractAddress();
  const accountAddress = metamaskDetails.account;

  const ethereum = window.ethereum;
  window.web3 = new window.Web3(ethereum);

  const stakingInstance = window.web3.eth.contract(stakingABI).at(stakingContractAddress);

  return new Promise((resolve, reject) => {
    stakingInstance.balances(accountAddress, { from: accountAddress }, (err, result) => {
      if (err) {
        reject(result);
      }
      resolve(result);
    });
  });
};

export const getBlockNumber = () => {
  // Check for Metamask
  if (window.ethereum) {
    const ethereum = window.ethereum;
    window.web3 = new window.Web3(ethereum);
    // Return the Block Number
    return new Promise((_reject, resolve) => {
      window.web3.eth.getBlockNumber((err, blockNumber) => {
        if (err) {
          resolve(err);
        }
        resolve(blockNumber);
      });
    });
  } else {
    // Fallback to Infura to get the blocknumber
    const web3 = new Web3(process.env.REACT_APP_INFURA_ENDPOINT);
    return new Promise((_reject, resolve) => {
      web3.eth.getBlockNumber((err, blockNumber) => {
        if (err) {
          resolve(err);
        }
        resolve(blockNumber);
      });
    });
  }
};

const getStakingContractAddress = () => {
  return stakingNetworks[process.env.REACT_APP_ETH_NETWORK].address;
};

const getTokenContractAddress = () => {
  return tokenNetworks[process.env.REACT_APP_ETH_NETWORK].address;
};

const getStakingInstance = () => {
  const stakingContractAddress = getStakingContractAddress();

  try {
    const ethereum = window.ethereum;
    window.web3 = new window.Web3(ethereum);

    const web3 = new Web3(window.web3.currentProvider);
    const stakingInstance = new web3.eth.Contract(stakingABI, stakingContractAddress);

    return stakingInstance;
  } catch (error) {
    throw error;
  }
};
