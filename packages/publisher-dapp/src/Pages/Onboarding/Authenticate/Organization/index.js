import React, { useState, Fragment } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import BasicDetails from "./BasicDetails";
import CompanyAddress from "./CompanyAddress";
import SNETButton from "shared/dist/components/SNETButton";
import { useStyles } from "./styles";

const Organization = () => {
  const classes = useStyles();
  const [basicDetails, setBasicDetails] = useState({
    companyName: "",
    duns: "",
    website: "",
    userFullName: "",
    phone: "",
  });
  const [hqAddress, setHqAddress] = useState({ street: "", apartment: "", city: "", zip: "", country: "" });
  const [mailingAddress, setMailingAddress] = useState({ street: "", apartment: "", city: "", zip: "", country: "" });
  const [sameAddress, setSameAddress] = useState(false);

  const handleBasicDetailsChange = event => {
    const { name, value } = event.target;
    console.log("name -", name, "value -", value);
    setBasicDetails({ ...basicDetails, [name]: value });
  };

  const handlehqAddressChange = event => {
    const { name, value } = event.target;
    setHqAddress({ ...hqAddress, [name]: value });
  };

  const handleMailingAddressChange = event => {
    const { name, value } = event.target;
    setMailingAddress({ ...mailingAddress, [name]: value });
  };

  const handleAddressSame = event => {
    console.log("event", event.target.checked, event.target.value);
    setSameAddress(event.target.checked);
  };

  return (
    <Fragment>
      <BasicDetails basicDetails={basicDetails} handleBasicDetailsChange={handleBasicDetailsChange} />
      <CompanyAddress
        hqAddress={hqAddress}
        handlehqAddressChange={handlehqAddressChange}
        mailingAddress={mailingAddress}
        handleMailingAddressChange={handleMailingAddressChange}
        sameAddress={sameAddress}
        handleSameAddressChange={handleAddressSame}
      />
      <div className={classes.buttonsContainer}>
        <SNETButton color="primary" children="cancel" />
        <SNETButton color="primary" children="back" />
        <SNETButton color="primary" variant="contained" children="finish" />
      </div>
    </Fragment>
  );
};

export default Organization;
