import React from "react";
import { withStyles } from "@material-ui/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import AlertBox from "shared/dist/components/AlertBox";
import StyledButton from "shared/dist/components/StyledButton";

import { useStyles } from "./styles";
import PrivacyTerms from "./PrivacyTerms";

const TermsAndConditions = ({ classes, title, checkboxChecked, handleChange, formLabel, CTAType, CTAText, CTADisabled, handleCTA, alertType, alertMsg  }) => {
  return (
    <div className={classes.onboardingContainer}>
      <div className={classes.termsAndConditionsContainer}>
        <h3>{title}</h3>
        <div className={classes.termsAndConditions}>
          <PrivacyTerms />
        </div>
        <div className={classes.checkboxAndButton}>
          <FormControlLabel
            control={<Checkbox checked={checkboxChecked} onChange={handleChange} color="primary" />}
            label={formLabel}
          />
          <StyledButton btnText="accept" />
        </div>
        <AlertBox type={alertType} message={alertMsg} />
      </div>
    </div>
  );
}

export default withStyles(useStyles)(TermsAndConditions);
