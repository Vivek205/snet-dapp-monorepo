import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Modal from "@material-ui/core/Modal";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/styles";
import Web3 from "web3";

import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";
import { useStyles } from "./styles";
import { ethereumEvents, ethereumMethods } from "shared/dist/utils/snetSdk";

const Networks = {
  1: "main",
  3: "ropsten",
};

const networkChangeAlert = {
  header: "Incorrect Metamask Network",
  type: alertTypes.WARNING,
  message: `Kindly check the network which you have set on Metamask. 
  Please switch it to ${Networks[process.env.REACT_APP_ETH_NETWORK]} to continue using the services.`,
};

const ethereum = window.ethereum;
const web3 = new Web3(ethereum, null, {});

class NetworkChangeOverlay extends Component {
  state = { alert: {}, invalidMetaMaskDetails: false };

  _allowedNetworkId = Number(process.env.REACT_APP_ETH_NETWORK);

  sdk;

  validateChainId = chainIdHex => {
    const chainId = web3.utils.hexToNumber(chainIdHex);
    if (chainId !== Number(process.env.REACT_APP_ETH_NETWORK)) {
      this.setState({ invalidMetaMaskDetails: true, alert: networkChangeAlert });
    } else {
      this.setState({ invalidMetaMaskDetails: false, alert: {} });
    }
  };

  componentDidMount() {
    ethereum.request({ method: ethereumMethods.REQUEST_CHAIN_ID }).then(this.validateChainId);
    ethereum.on(ethereumEvents.CHAIN_CHANGED, this.validateChainId);
  }

  render() {
    const { classes } = this.props;
    const { alert, invalidMetaMaskDetails } = this.state;
    return (
      <Modal disableBackdropClick open={invalidMetaMaskDetails}>
        <Card className={classes.card}>
          <CardHeader title={<h4>{alert.header}</h4>} />
          <Divider />
          <CardContent className={classes.cardContent}>
            <AlertBox type={alert.type} message={alert.message} />
          </CardContent>
        </Card>
      </Modal>
    );
  }
}

export default withStyles(useStyles)(NetworkChangeOverlay);
