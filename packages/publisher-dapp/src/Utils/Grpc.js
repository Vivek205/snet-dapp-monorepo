import BigNumber from "bignumber.js";
import isEmpty from "lodash/isEmpty";

export const uint8ArrayToBN = uint8Array => {
  if (isEmpty(uint8Array)) {
    return new BigNumber(0);
  }

  const buffer = Buffer.from(uint8Array);
  const hex = `0x${buffer.toString("hex")}`;
  return new BigNumber(hex);
};

export const hexToB64 = hex => {
  const signatureBuffer = Buffer.from(hex.slice(2), "hex");
  return signatureBuffer.toString("base64");
};
