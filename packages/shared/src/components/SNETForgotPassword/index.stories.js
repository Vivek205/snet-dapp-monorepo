import React from "react";
import { storiesOf } from "@storybook/react";
import withLiveEditScope from "storybook-addon-react-live-edit/dist/withLiveEditScope";
import { BrowserRouter as ReactRouter } from "react-router-dom";

import SNETForgotPassword from "./";

storiesOf("Auth|SNETForgotPassword", module)
  .addParameters({ props: { propTables: [SNETForgotPassword] } })
  .addDecorator(withLiveEditScope({ React, SNETForgotPassword, ReactRouter }))
  .addLiveSource(
    "live source",
    `return   <ReactRouter>
                <SNETForgotPassword 
                   title="SingularityNet"
                   email="someone@somewhere.com"
                   forgotPasswordError="error goes here"
                   onSubmit={console.log}/>  
              </ReactRouter>`
  );
