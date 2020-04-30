import React from "react";
import { storiesOf } from "@storybook/react";
import withLiveEditScope from "storybook-addon-react-live-edit/dist/withLiveEditScope";

import SNETTextarea from "./";

storiesOf("Form|SNETTextarea", module)
  .addParameters({ props: { propTables: [SNETTextarea] } })
  .addDecorator(withLiveEditScope({ React, SNETTextarea }))
  .addLiveSource(
    "live source",
    `return <SNETTextarea 
              label="label" 
              rowCount={6}
              colCount={6}
              name="name"
              onChange={console.log}
              minCount={12}
              maxCount={12}
 />`
  );
