import React from "react";
import { storiesOf } from "@storybook/react";
import withLiveEditScope from "storybook-addon-react-live-edit/dist/withLiveEditScope";
import { BrowserRouter as ReactRouter } from "react-router-dom";

import SNETLogin from "./";

storiesOf("SNETLogin", module)
  .addParameters({ props: { propTables: [SNETLogin] } })
  .addDecorator(withLiveEditScope({ React, SNETLogin, ReactRouter }))
  .addLiveSource(
    "live source",
    `return   <ReactRouter>
                <SNETLogin title="SingularityNET" forgotPasswordLink="#" 
                loginError="Username Password Error" onSubmit={console.log}/>  
              </ReactRouter>`
  );
