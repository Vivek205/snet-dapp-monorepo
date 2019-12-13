import React from 'react';
import TermsAndConditions from "shared/dist/components/TermsAndConditions";

const TNC = () => {
  return (
    <TermsAndConditions 
    	title="Title"
    	checkboxChecked={true}
    	formLabel="Form Label"
    	CTAType="blue"
    	CTAText="Button"
    	CTADisabled={false}
    	alertType="error"
    	alertMsg="Alert Msg"
    />
  );
};

export default TNC;