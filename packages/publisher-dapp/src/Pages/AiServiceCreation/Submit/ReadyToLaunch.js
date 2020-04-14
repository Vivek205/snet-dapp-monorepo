import React, { Fragment } from "react";
import SNETStatusBanner, { statusTitleType } from "shared/dist/components/SNETStatusBanner";
import AlertBox from "shared/dist/components/AlertBox";

const ReadyToLaunch = ({ handlePublish, handleBackToDashboard, alert }) => {
  return (
    <Fragment>
      <SNETStatusBanner
        title="Your AI service review is in progress…"
        img="http://placehold.it/302x242"
        description="This review may take a day or two.  After the review you will be notified if your AI service is accepted or if some inputs need to be refined."
        actions={[
          { children: "Launch Service", variant: "contained", color: "primary", onClick: handlePublish },
          { children: "back to dashboard", variant: "outlined", color: "primary", onClick: handleBackToDashboard },
        ]}
        type={statusTitleType.PENDING}
      />
      <AlertBox type={alert.type} message={alert.message} />
    </Fragment>
  );
};

export default ReadyToLaunch;
