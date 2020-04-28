import BigNumber from "bignumber.js";
import isEmpty from "lodash/isEmpty";

export const uint8ArrayToHex = uint8Array => {
  const buffer = Buffer.from(uint8Array);
  const hex = `0x${buffer.toString("hex")}`;
  return hex;
};

export const uint8ArrayToBN = uint8Array => {
  if (isEmpty(uint8Array)) {
    return new BigNumber(0);
  }
  const hex = uint8ArrayToHex(uint8Array);
  return new BigNumber(hex);
};

export const hexToB64 = hex => {
  const signatureBuffer = Buffer.from(hex.slice(2), "hex");
  return signatureBuffer.toString("base64");
};

export const signatureHexToVRS = (signatureHex, bytes = 64) => {
  signatureHex = signatureHex.substr(2);
  const r = "0x" + signatureHex.slice(0, bytes);
  const s = "0x" + signatureHex.slice(bytes, bytes * 2);
  const v = "0x" + signatureHex.slice(bytes * 2, bytes * 2 + 2);
  return { r, s, v };
};

export const toBNString = value => {
  return new BigNumber(value).toFixed();
};

export const solidityTypes = {
  ADDRESS: "address",
  UINT256: "uint256",
  STRING: "string",
};

export const toBytes = value => {
  const buffer = Buffer.alloc(4);
  return buffer.writeUInt32BE(value, 0);
};

const secInADay = 86400;
export const secToDays = sec => Math.ceil(sec / secInADay);

const secInABlock = 15;
export const blocksToSec = blocks => blocks * secInABlock;

export const blocksToDays = blocks => {
  const seconds = blocksToSec(blocks);
  return secToDays(seconds);
};
