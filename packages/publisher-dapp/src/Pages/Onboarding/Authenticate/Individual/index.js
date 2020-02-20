import React, { Component } from "react";
import { connect } from "react-redux";

import SNETButton from "shared/dist/components/SNETButton";
import { individualVerificationActions } from "../../../../Services/Redux/actionCreators/userActions";

class Individual extends Component {
  componentDidMount = async () => {
    await this.props.getVerificationStatus();
  };

  handleVerify = async () => {
    const { redirectUrl } = await this.props.initiateVerification();
    await window.location.replace(redirectUrl);
  };

  render() {
    return (
      <div>
        Individual
        <SNETButton onClick={this.handleVerify}>Verify via Jumio</SNETButton>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  initiateVerification: () => dispatch(individualVerificationActions.initiateVerification()),
  getVerificationStatus: () => dispatch(individualVerificationActions.getVerificationStatus()),
});

export default connect(null, mapDispatchToProps)(Individual);
