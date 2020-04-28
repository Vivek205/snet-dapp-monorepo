import React from "react";
import { storiesOf } from "@storybook/react";
import withLiveEditScope from "storybook-addon-react-live-edit/dist/withLiveEditScope";

import SNETLogin from "./";

storiesOf("SNETLogin", module)
  .addParameters({ props: { propTables: [SNETLogin] } })
  .addDecorator(withLiveEditScope({ React, SNETLogin }))
  .addLiveSource(
    "live source",
    `return <SNETLogin title="SingularityNET" forgotPasswordLink="#" 
              loginError="Username Password Error" onSubmit={console.log}/>`
  );
