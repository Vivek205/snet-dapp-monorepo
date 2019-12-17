import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import HQAddress from "./HQAddress";
import MailingAddress from "./MailingAddress";

const CompanyAddress = props => {
  const {
    hqAddress,
    handlehqAddressChange,
    mailingAddress,
    handleMailingAddressChange,
    sameAddress,
    handleSameAddressChange,
  } = props;

  return (
    <Grid container>
      <HQAddress hqAddress={hqAddress} handlehqAddressChange={handlehqAddressChange} />
      <MailingAddress
        mailingAddress={mailingAddress}
        sameAddress={sameAddress}
        handleSameAddressChange={handleSameAddressChange}
        handleMailingAddressChange={handleMailingAddressChange}
      />
    </Grid>
  );
};

CompanyAddress.propTypes = {
  hqAddress: PropTypes.shape({
    street: PropTypes.string,
    apartment: PropTypes.string,
    city: PropTypes.string,
    zip: PropTypes.string,
    country: PropTypes.string,
  }),
  handlehqAddressChange: PropTypes.func,
  sameHqAndMailAddress: PropTypes.bool,
  handleSameAddressChange: PropTypes.func,
  mailingAddress: PropTypes.shape({
    street: PropTypes.string,
    apartment: PropTypes.string,
    city: PropTypes.string,
    zip: PropTypes.string,
    country: PropTypes.string,
  }),
  handleMailingAddressChange: PropTypes.func,
};

export default CompanyAddress;
