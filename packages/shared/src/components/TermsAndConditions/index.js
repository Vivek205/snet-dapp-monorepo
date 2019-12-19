import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import AlertBox from "shared/dist/components/AlertBox";
import StyledButton from "shared/dist/components/StyledButton";
import PropTypes from "prop-types";

import { useStyles } from "./styles";
import PrivacyTerms from "./PrivacyTerms";

const TermsAndConditions = ({ classes, title, formLabel, onAccept }) => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className={classes.onboardingContainer}>
      <div className={classes.termsAndConditionsContainer}>
        <h3>{title}</h3>
        <div className={classes.termsAndConditions}>
          <PrivacyTerms />
        </div>
        <div className={classes.checkboxAndButton}>
          <FormControlLabel
            control={<Checkbox onChange={() => setAgreed(!agreed)} color="primary" />}
            label={formLabel}
          />
          <StyledButton btnText="accept" disabled={!agreed} onClick={onAccept}/>
        </div>
        <AlertBox type={alert.type} message={alert.message} />
      </div>
    </div>
  );
};

TermsAndConditions.protoTypes = {
  title: PropTypes.string,
  formLabel: PropTypes.string,
  onAccept: PropTypes.func,
};

export default withStyles(useStyles)(TermsAndConditions);
