import React from "react";
import { storiesOf } from "@storybook/react";
import withLiveEditScope from "storybook-addon-react-live-edit/dist/withLiveEditScope";

import SNETStatusBanner, { statusTitleType } from "./";
import VerificationPendingImage from "../../assets/images/VerificationPending.png";

storiesOf("SNETStatusBanner", module)
  .addParameters({ props: { propTables: [SNETStatusBanner] } })
  .addDecorator(withLiveEditScope({ React, SNETStatusBanner, VerificationPendingImage, statusTitleType }))
  .addLiveSource(
    "live source",
    `return   <SNETStatusBanner 
                title="Your AI service review is in progress…" 
                type={statusTitleType.PENDING}
                img={VerificationPendingImage}
                description="lorem ipsom dolor amet" 
                actions={
                  [
                    {children:"secondary", color:"secondary", variant:"contained"},
                    {children:"primary", color:"primary", variant:"contained"}
                  ]
                }
                
              />  
              `
  );
