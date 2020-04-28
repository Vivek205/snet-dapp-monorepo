import React from "react";
import { storiesOf } from "@storybook/react";
import withLiveEditScope from "storybook-addon-react-live-edit/dist/withLiveEditScope";

import SNETFileUpload from "./";

storiesOf("SNETFileUpload", module)
  .addParameters({ props: { propTables: [SNETFileUpload] } })
  .addDecorator(withLiveEditScope({ React, SNETFileUpload }))
  .addLiveSource(
    "live source",
    `return <SNETFileUpload onDrop={console.log} accept="image/jpeg" showFileDetails fileName="Sample File" fileSize={1000}/>`
  );
