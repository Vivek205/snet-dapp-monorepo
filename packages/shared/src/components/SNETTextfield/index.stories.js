import React from "react";
import { storiesOf } from "@storybook/react";
import withLiveEditScope from "storybook-addon-react-live-edit/dist/withLiveEditScope";

import SNETTextfield from "./";

storiesOf("Form|SNETTextfield", module)
  .addParameters({ props: { propTables: [SNETTextfield] } })
  .addDecorator(withLiveEditScope({ React, SNETTextfield }))
  .addLiveSource(
    "live source",
    `return <SNETTextfield 
              label="label" 
              helperText="helper text"
              description="description"
              name="name"
              icon
 />`
  );
