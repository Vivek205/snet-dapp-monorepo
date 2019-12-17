import React from 'react';
import { TermsAndConditionsDetails } from "./content";
import TermsAndConditions from "shared/dist/components/TermsAndConditions";

const TNC = () => {
  return (
  	<TermsAndConditions 
    	title={TermsAndConditionsDetails.title}
    	formLabel={TermsAndConditionsDetails.formLabel}
    	checkboxChecked={true}
    />    
  );
};

export default TNC;