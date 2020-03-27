import MPEAbi from "singularitynet-platform-contracts/abi/MultiPartyEscrow";
import MPENetworks from "singularitynet-platform-contracts/networks/MultiPartyEscrow";
import Web3 from "web3";

export default class MPEContract {
  constructor() {
    this._web3 = undefined;
    this._contract = undefined;
  }

  _initBlockChain = async () => {
    if (this._web3) {
      return;
    }
    const web3Provider = window.ethereum;
    const accounts = await web3Provider.enable();
    // eslint-disable-next-line require-atomic-updates
    window.web3.eth.defaultAccount = accounts[0];
    this._web3 = new Web3(web3Provider, null, {});
    this._contract = new this._web3.eth.Contract(MPEAbi, MPENetworks[process.env.REACT_APP_ETH_NETWORK].address);
    return;
  };

  _getAddress = async () => {
    const address = await this._web3.eth.getAccounts();
    return address[0];
  };

  /**
   * Transfers tokens from the account to MPE account
   * @param channelId channel Id
   * @param actualAmount actual amount should be aligned with channel ids index
   * @param plannedAmount planned amount should be aligned with channel ids index
   * @param isSendback sendback flags
   * @param v channel senders signatures in V R S
   * @param r channel senders signatures in V R S
   * @param s channel senders signatures in V R S
   * @returns {Promise.<TransactionReceipt>}
   */
  channelClaim = async (channelId, actualAmount, plannedAmount, v, r, s, isSendback) => {
    await this._initBlockChain();

    const bytesR = this._web3.utils.hexToBytes(r);
    const bytesS = this._web3.utils.hexToBytes(s);
    const address = await this._getAddress();

    return this._contract.methods
      .channelClaim(channelId, actualAmount, plannedAmount, v, bytesR, bytesS, isSendback)
      .send({ from: address });
  };
}
