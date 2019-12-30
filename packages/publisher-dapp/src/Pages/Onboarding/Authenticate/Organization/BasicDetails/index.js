import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import SNETTextField from "shared/dist/components/SNETTextfield";
import { basicDetailsFormData } from "./content";
import { useSelector, useDispatch } from "react-redux";
import { organizationActions } from "../../../../../Services/Redux/actionCreators";

const BasicDetails = () => {
  const { id, name, website, duns, ownerFullName, phone } = useSelector(state => state.organization);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    dispatch(organizationActions.setOneBasicDetail(name, value));
  };

  return (
    <Grid container>
      <SNETTextField {...basicDetailsFormData.ORG_ID} value={id} onChange={handleChange} />
      <SNETTextField {...basicDetailsFormData.COMPANY_NAME} value={name} onChange={handleChange} />
      <SNETTextField {...basicDetailsFormData.DUNS} value={duns} onChange={handleChange} />
      <SNETTextField {...basicDetailsFormData.WEBSITE} value={website} onChange={handleChange} />
      <SNETTextField {...basicDetailsFormData.USER_FULL_NAME} value={ownerFullName} onChange={handleChange} />
      <SNETTextField {...basicDetailsFormData.PHONE} value={phone} onChange={handleChange} />
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
};

export default BasicDetails;
