import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";

import SNETTextfield from "shared/dist/components/SNETTextfield";
import SNETTextarea from "shared/dist/components/SNETTextarea";
import { useStyles } from "./styles";
import { organizationActions } from "../../../../Services/Redux/actionCreators";

const BasicDetails = ({ classes }) => {
  const { name, shortDescription, longDescription } = useSelector(state => state.organization);
  const dispatch = useDispatch();

  const handleFormInputsChange = event => {
    const { name, value } = event.target;
    dispatch(organizationActions.setOneBasicDetail(name, value));
  };

  return (
    <Grid item xs={12} sm={12} md={12} lg={12} className={classes.basicDetailsContainer}>
      <Typography variant="subtitle2" className={classes.description}>
        This information that will be displayed as the Provider for all the AI services your company publishes to AI
        Marketplace
      </Typography>
      <SNETTextfield
        disabled
        name="name"
        value={name}
        label="Organization Name"
        description="The organziation name is displayed to users on the AI Marketplace."
        onChange={handleFormInputsChange}
      />
      <SNETTextarea
        label="Short Description"
        rowCount="4"
        colCount="102"
        minCount="0"
        maxCount="160"
        name="shortDescription"
        value={shortDescription}
        onChange={handleFormInputsChange}
      />
      <SNETTextarea
        label="Long Description"
        rowCount="8"
        colCount="102"
        minCount="0"
        maxCount="5000"
        name="longDescription"
        value={longDescription}
        onChange={handleFormInputsChange}
      />
      <SNETTextfield
        label="Organization Website URL"
        description="Your organization’s website must be publicly available and the domain name must be associated with your organization."
      />
    </Grid>
  );
};

export default withStyles(useStyles)(BasicDetails);
