import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import BasicDetailsInput from "./BasicDetailsInput";
import { basicDetailsFormData } from "./content";

const BasicDetails = props => {
  const { basicDetails, handleBasicDetailsChange } = props;
  return (
    <Grid container>
      <BasicDetailsInput
        {...basicDetailsFormData.COMPANY_NAME}
        value={basicDetails.companyName}
        onChange={handleBasicDetailsChange}
      />
      <BasicDetailsInput {...basicDetailsFormData.DUNS} value={basicDetails.duns} onChange={handleBasicDetailsChange} />
      <BasicDetailsInput
        {...basicDetailsFormData.WEBSITE}
        value={basicDetails.website}
        onChange={handleBasicDetailsChange}
      />
      <BasicDetailsInput
        {...basicDetailsFormData.USER_FULL_NAME}
        value={basicDetails.ownerFullName}
        onChange={handleBasicDetailsChange}
      />
      <BasicDetailsInput
        {...basicDetailsFormData.PHONE}
        value={basicDetails.phone}
        onChange={handleBasicDetailsChange}
      />
    </Grid>
  );
};

BasicDetails.propTypes = {
  basicDetails: PropTypes.shape({
    companyName: PropTypes.string,
    duns: PropTypes.string,
    website: PropTypes.string,
    ownerFullName: PropTypes.string,
    phone: PropTypes.string,
  }),
  handleBasicDetailsChange: PropTypes.func,
};

export default BasicDetails;
