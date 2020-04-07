import React from "react";
import { useSelector, useDispatch } from "react-redux";
import isEmpty from "lodash/isEmpty";

import Typography from "@material-ui/core/Typography";
import NoMetamaskImg from "shared/dist/assets/images/NoMetamask.png";
import SNETButton from "shared/dist/components/SNETButton";

import { useStyles } from "./styles";
import { metamaskActions } from "../../Services/Redux/actionCreators";
import { userWalletActions } from "../../Services/Redux/actionCreators/userActions";
import { toChecksumAddress } from "../../Utils/GenHelperFunctions";

const stateSelector = state => ({
  metamaskDetails: state.metamaskReducer.metamaskDetails,
  walletList: state.user.walletList,
});

const NoMetamask = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { metamaskDetails, walletList } = useSelector(state => stateSelector(state));

  const handleConnect = () => {
    connectMetamask();
  };

  const connectMetamask = async () => {
    if (window.ethereum) {
      try {
        const ethereum = window.ethereum;
        window.web3 = new window.Web3(ethereum);

        // Enable Metamask for this Web Site
        //const accounts = await ethereum.enable();
        await ethereum.enable();

        window.web3.version.getNetwork(async (_err, netId) => {
          const isTxnsAllowed =
            Boolean(window.web3.eth.defaultAccount) && netId.toString() === process.env.REACT_APP_ETH_NETWORK;
          await storeMetamaskDetails(
            Boolean(window.web3.eth.defaultAccount),
            toChecksumAddress(window.web3.eth.defaultAccount),
            netId,
            isTxnsAllowed
          );
        });

        // Subscribe to Metamask after connection
        subscribeToMetamask();
      } catch (_error) {
        // User denied account access...
        storeMetamaskDetails(false, "0x0", 0, false);
      }
    }
  };

  const subscribeToMetamask = () => {
    if (window.ethereum) {
      const ethereum = window.ethereum;
      window.web3 = new window.Web3(ethereum);

      try {
        window.web3.currentProvider.publicConfigStore.on("update", () => {
          window.web3.version.getNetwork(async (_err, netId) => {
            const isTxnsAllowed =
              Boolean(window.web3.eth.defaultAccount) && netId.toString() === process.env.REACT_APP_ETH_NETWORK;
            await storeMetamaskDetails(
              Boolean(window.web3.eth.defaultAccount),
              toChecksumAddress(window.web3.eth.defaultAccount),
              netId,
              isTxnsAllowed
            );
          });
        });
      } catch (_error) {
        // User has denied account access...
        storeMetamaskDetails(false, "0x0", 0, false);
      }
    }
  };

  const storeMetamaskDetails = async (isConnected, account, networkId, isTxnsAllowed) => {
    await dispatch(metamaskActions.updateMetamaskDetails(isConnected, account, networkId, isTxnsAllowed));

    if (isTxnsAllowed) {
      if (!isEmpty(walletList) && account !== "0x0") {
        const wallets = walletList.filter(w => w.address.toLowerCase() === account.toLowerCase());
        if (wallets.length === 0) {
          // Call the Register API to associate the Wallet to User
          dispatch(userWalletActions.registerWallet(account));
        }
      } else if (account !== "0x0") {
        // Call the Register API to associate the Wallet to User
        dispatch(userWalletActions.registerWallet(account));
      }
    }
  };

  if (metamaskDetails.isTxnsAllowed) {
    return null;
  }

  return (
    <div className={classes.noMetamaskConnectedContainer}>
      <img src={NoMetamaskImg} alt="Metamask Not Connected" />
      <Typography className={classes.noMetamaskTitle}>Metamask not installed or connected.</Typography>
      <Typography className={classes.noMetamaskDesc}>
        Please install or enable Metamask to view the contents of this page.{" "}
        <span>
          <a href="https://metamask.io/" title="Click Here" target="_new">
            Click here{" "}
          </a>
          to learn more about Metamask and how to use it.
        </span>
      </Typography>
      <SNETButton color="primary" variant="contained" children="connect metamask" onClick={handleConnect} />
    </div>
  );
};

export default NoMetamask;
