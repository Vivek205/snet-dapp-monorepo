import React, { useEffect } from "react";
import GetStarted from "shared/dist/components/GetStarted";
import { GetStartedDetails, GetStartedCategories } from "./content";
import { useSelector } from "react-redux";
import { GlobalRoutes } from "../../GlobalRouter/Routes";

const selectState = state => ({
  isLoggedIn: state.user.isLoggedIn,
  orgUuid: state.organization.uuid,
  publisherTnC: state.user.publisherTnC,
});

const HowItWorks = ({ history }) => {
  const { isLoggedIn, orgUuid, publisherTnC } = useSelector(selectState);

  useEffect(() => {
    if (isLoggedIn && (orgUuid || publisherTnC.accepted)) {
      history.push(GlobalRoutes.ONBOARDING.path);
    }
  }, [history, isLoggedIn, orgUuid, publisherTnC]);

  return <GetStarted GetStartedDetails={GetStartedDetails} GetStartedCategories={GetStartedCategories} />;
};

export default HowItWorks;
