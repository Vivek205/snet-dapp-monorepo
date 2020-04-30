import React from "react";
import { storiesOf } from "@storybook/react";
import withLiveEditScope from "storybook-addon-react-live-edit/dist/withLiveEditScope";

import SNETLoader from "./";

storiesOf("SNETLoader", module)
  .addParameters({ props: { propTables: [SNETLoader] } })
  .addDecorator(withLiveEditScope({ React, SNETLoader }))
  .addLiveSource(
    "live source",
    `return <SNETLoader isLoading title="Sample Header" content="Please wait. this is a sample loader text" />`
  );
