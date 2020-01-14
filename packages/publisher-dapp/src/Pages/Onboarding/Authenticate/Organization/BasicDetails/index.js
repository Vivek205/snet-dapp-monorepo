import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import SNETTextField from "shared/dist/components/SNETTextfield";
import { basicDetailsFormData } from "./content";
import { useSelector, useDispatch } from "react-redux";
import { organizationActions } from "../../../../../Services/Redux/actionCreators";
import { ContactsTypes } from "../../../../../Utils/Contacts";

const BasicDetails = () => {
  const { id, name, website, duns, ownerFullName, contacts } = useSelector(state => state.organization);
  const contact = contacts.find(el => el.type === ContactsTypes.GENERAL);
  let phone = "";
  if (contact) {
    phone = contact.phone;
  }

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    dispatch(organizationActions.setOneBasicDetail(name, value));
  };

  const handleContactsChange = event => {
    const { name, value } = event.target;
    const updatedContacts = [...contacts];
    const index = contacts.findIndex(el => el.type === ContactsTypes.GENERAL);
    if (index !== -1) {
      updatedContacts[index] = { ...contacts[index], [name]: value };
    } else {
      updatedContacts[contacts.length] = { type: ContactsTypes.GENERAL, [name]: value };
    }
    dispatch(organizationActions.setContacts(updatedContacts));
  };

  return (
    <Grid container>
      <SNETTextField {...basicDetailsFormData.ORG_ID} value={id} onChange={handleChange} />
      <SNETTextField {...basicDetailsFormData.ORGANIZATION_NAME} value={name} onChange={handleChange} />
      <SNETTextField {...basicDetailsFormData.DUNS} value={duns} onChange={handleChange} />
      <SNETTextField {...basicDetailsFormData.WEBSITE} value={website} onChange={handleChange} />
      <SNETTextField {...basicDetailsFormData.OWNERS_FULL_NAME} value={ownerFullName} onChange={handleChange} />
      <SNETTextField {...basicDetailsFormData.PHONE} value={phone} onChange={handleContactsChange} />
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
