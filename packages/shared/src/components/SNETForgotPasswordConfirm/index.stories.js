import React from "react";
import { storiesOf } from "@storybook/react";
import withLiveEditScope from "storybook-addon-react-live-edit/dist/withLiveEditScope";
import { BrowserRouter as ReactRouter } from "react-router-dom";

import SNETForgotPasswordConfirm from "./";

storiesOf("Auth|SNETForgotPasswordConfirm", module)
  .addParameters({ props: { propTables: [SNETForgotPasswordConfirm] } })
  .addDecorator(withLiveEditScope({ React, SNETForgotPasswordConfirm, ReactRouter }))
  .addLiveSource(
    "live source",
    `return   <ReactRouter>
                <SNETForgotPasswordConfirm 
                   title="SingularityNet"
                   forgotPasswordError="error goes here"
                   onSubmit={console.log}/>  
              </ReactRouter>`
  );
