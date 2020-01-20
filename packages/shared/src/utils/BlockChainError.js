export default class BlockChainError extends Error {
  constructor(message) {
    super(message);
    this.name = "BlockChainError";
  }
}
