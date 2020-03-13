import web3 from "web3";
import BigNumber from "bignumber.js"; // Using BigNumber as web3.utils.BN throwing Assertion Fail for larger numbers

const BN = web3.utils.BN;

export const toWei = val => {
  var factor = Math.pow(10, 8);
  var weiValBN = new BN(Math.round(val * factor));
  return weiValBN.toString();
};

export const fromWei = weiValue => {
  const decimalsToDisplay = 2;
  const factor = Math.pow(10, 8);

  if (BigNumber.isBigNumber(weiValue)) {
    return weiValue.div(factor).toFixed(decimalsToDisplay);
  }

  var valBN = new BigNumber(weiValue);
  valBN = valBN.div(factor);
  return valBN.toFixed(decimalsToDisplay);
};

// export const fromWei = weiValue => {
//   var factor = Math.pow(10, 8);
//   //var valBN = new BN(weiValue / factor)
//   var valBN = weiValue / factor;
//   return valBN.toString();
// };

export const toShortAddress = address => {
  const addressLength = address.length;
  var shortAddress = address.slice(0, 6) + "..." + address.slice(addressLength - 4, addressLength);
  return shortAddress;
};

export const computeBlocksFromDates = (fromDate, toDate) => {
  // Considering 15 Secs as block creation time
  var blocks = 0;
  if (isNaN(Date.parse(fromDate)) || isNaN(Date.parse(toDate))) {
    return blocks;
  } else {
    var dateInMillSecs = 0;
    dateInMillSecs = Date.parse(toDate) - Date.parse(fromDate);
    blocks = Math.floor(dateInMillSecs / (1000 * 15));
  }
  return blocks > 0 ? blocks : 0;
};

export const computeDateFromBlockNumber = (currentBlockNumber, toBlockNumber) => {
  // Considering 15 Secs as block creation time
  var millSecs = (toBlockNumber - currentBlockNumber) * (1000 * 15);

  // Current blocknumber is considered as current time
  var toDate = new Date(Date.now() + 1 * millSecs);

  return toDate.toISOString().slice(0, 10);
};

export const generateRandomKey = prefix => {
  return `${prefix}_${new Date().getTime()}`;
};

export const isValidInputAmount = value => {
  //  Fixed to two decimal places
  const regE = new RegExp(/^\d+(\.\d{0,2})?$/);
  let bIsValid = false;
  if (regE.test(value)) {
    bIsValid = true;
  }

  return bIsValid;
};

export const isFoundationMember = (metamaskDetails, foundationMembers) => {
  var _isFoundationMember = false;

  if (metamaskDetails.isTxnsAllowed && Object.entries(foundationMembers).length > 0) {
    const mems = foundationMembers.filter(
      mem => mem.member_address.toLowerCase() === metamaskDetails.account.toLowerCase() && mem.status === 1
    );
    if (mems.length > 0) _isFoundationMember = true;
  }

  return _isFoundationMember;
};

export const toChecksumAddress = address => {
  if (web3.utils.isAddress(address)) return web3.utils.toChecksumAddress(address);
  return address;
};

export const toBigNumber = value => {
  return new BN(value);
};
