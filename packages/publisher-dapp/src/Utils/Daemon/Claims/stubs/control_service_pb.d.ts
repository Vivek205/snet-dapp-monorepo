// package: escrow
// file: control_service.proto

import * as jspb from "google-protobuf";

export class GetPaymentsListRequest extends jspb.Message {
  getMpeAddress(): string;
  setMpeAddress(value: string): void;

  getCurrentBlock(): number;
  setCurrentBlock(value: number): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentsListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentsListRequest): GetPaymentsListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPaymentsListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentsListRequest;
  static deserializeBinaryFromReader(message: GetPaymentsListRequest, reader: jspb.BinaryReader): GetPaymentsListRequest;
}

export namespace GetPaymentsListRequest {
  export type AsObject = {
    mpeAddress: string,
    currentBlock: number,
    signature: Uint8Array | string,
  }
}

export class StartClaimRequest extends jspb.Message {
  getMpeAddress(): string;
  setMpeAddress(value: string): void;

  getChannelId(): Uint8Array | string;
  getChannelId_asU8(): Uint8Array;
  getChannelId_asB64(): string;
  setChannelId(value: Uint8Array | string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartClaimRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartClaimRequest): StartClaimRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartClaimRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartClaimRequest;
  static deserializeBinaryFromReader(message: StartClaimRequest, reader: jspb.BinaryReader): StartClaimRequest;
}

export namespace StartClaimRequest {
  export type AsObject = {
    mpeAddress: string,
    channelId: Uint8Array | string,
    signature: Uint8Array | string,
  }
}

export class PaymentReply extends jspb.Message {
  getChannelId(): Uint8Array | string;
  getChannelId_asU8(): Uint8Array;
  getChannelId_asB64(): string;
  setChannelId(value: Uint8Array | string): void;

  getChannelNonce(): Uint8Array | string;
  getChannelNonce_asU8(): Uint8Array;
  getChannelNonce_asB64(): string;
  setChannelNonce(value: Uint8Array | string): void;

  getSignedAmount(): Uint8Array | string;
  getSignedAmount_asU8(): Uint8Array;
  getSignedAmount_asB64(): string;
  setSignedAmount(value: Uint8Array | string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentReply.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentReply): PaymentReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentReply;
  static deserializeBinaryFromReader(message: PaymentReply, reader: jspb.BinaryReader): PaymentReply;
}

export namespace PaymentReply {
  export type AsObject = {
    channelId: Uint8Array | string,
    channelNonce: Uint8Array | string,
    signedAmount: Uint8Array | string,
    signature: Uint8Array | string,
  }
}

export class PaymentsListReply extends jspb.Message {
  clearPaymentsList(): void;
  getPaymentsList(): Array<PaymentReply>;
  setPaymentsList(value: Array<PaymentReply>): void;
  addPayments(value?: PaymentReply, index?: number): PaymentReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentsListReply.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentsListReply): PaymentsListReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentsListReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentsListReply;
  static deserializeBinaryFromReader(message: PaymentsListReply, reader: jspb.BinaryReader): PaymentsListReply;
}

export namespace PaymentsListReply {
  export type AsObject = {
    paymentsList: Array<PaymentReply.AsObject>,
  }
}

