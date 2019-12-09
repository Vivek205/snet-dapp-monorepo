import React from 'react';
import GetStarted from "shared/dist/components/GetStarted";
import { GetStartedCategoriesData } from "./constant";

const HowItWorks = () => {
  return (
    <GetStarted 
    	title="How the AI Publishing Works"
    	description="Have a sneak peak at what we have in our offering"
    	GetStartedCategoriesData={GetStartedCategoriesData}
    />
  );
};

export default HowItWorks;