import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import SNETTextField from "shared/dist/components/SNETTextfield"
import { basicDetailsFormData } from "./content";

const BasicDetails = props => {
  const { basicDetails, handleBasicDetailsChange } = props;
  return (
    <Grid container>
      <SNETTextField
        {...basicDetailsFormData.COMPANY_NAME}
        value={basicDetails.name}
        onChange={handleBasicDetailsChange}
      />
      <SNETTextField {...basicDetailsFormData.DUNS} value={basicDetails.duns} onChange={handleBasicDetailsChange} />
      <SNETTextField
        {...basicDetailsFormData.WEBSITE}
        value={basicDetails.website}
        onChange={handleBasicDetailsChange}
      />
      <SNETTextField
        {...basicDetailsFormData.USER_FULL_NAME}
        value={basicDetails.ownerFullName}
        onChange={handleBasicDetailsChange}
      />
      <SNETTextField
        {...basicDetailsFormData.PHONE}
        value={basicDetails.phone}
        onChange={handleBasicDetailsChange}
      />
    </Grid>
  );
};

BasicDetails.propTypes = {
  basicDetails: PropTypes.shape({
    name: PropTypes.string,
    duns: PropTypes.string,
    website: PropTypes.string,
    ownerFullName: PropTypes.string,
    phone: PropTypes.string,
  }),
  handleBasicDetailsChange: PropTypes.func,
};

export default BasicDetails;
