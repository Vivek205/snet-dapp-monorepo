import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";

import SNETTextfield from "shared/dist/components/SNETTextfield";
import { useStyles } from "./styles";
import { organizationActions } from "../../../../Services/Redux/actionCreators";
import { ContactsTypes } from "../../../../Utils/Contacts";

const SupportDetails = ({ classes }) => {
  const { contacts } = useSelector(state => state.organization);
  let supportContacts = contacts.find(el => el.type === ContactsTypes.SUPPORT);
  if (!supportContacts) {
    supportContacts = { type: ContactsTypes.SUPPORT, phone: "", email: "" };
  }

  const dispatch = useDispatch();

  const handleFormInputsChange = event => {
    const { name, value } = event.target;
    const index = contacts.findIndex(el => el.type === ContactsTypes.SUPPORT);
    const updatedContacts = [...contacts];
    if (index !== -1) {
      updatedContacts[index] = { ...contacts[index], [name]: value };
    } else {
      updatedContacts[contacts.length] = { type: ContactsTypes.SUPPORT, [name]: value };
    }

    dispatch(organizationActions.setContacts(updatedContacts));
  };

  return (
    <Grid item xs={12} sm={12} md={12} lg={12} className={classes.supportDetailsContainer}>
      <Typography variant="subtitle1" className={classes.heading}>
        Support Contact (Optional)
      </Typography>
      <Typography variant="subtitle2">
        Please provide your organization contact information for AI Marketplace users to contact you regarding your
        published AI services.
      </Typography>
      <SNETTextfield
        label="Support Email"
        description="This email address will be displayed to AI Marketplace users."
        name="email"
        value={supportContacts.email}
        onChange={handleFormInputsChange}
      />
      <SNETTextfield
        label="Phone Number"
        description="Include plus sign, country code and area code.  For example +1-800-555-1234."
        name="phone"
        value={supportContacts.phone}
        onChange={handleFormInputsChange}
      />
    </Grid>
  );
};

export default withStyles(useStyles)(SupportDetails);
