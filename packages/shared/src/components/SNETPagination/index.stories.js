import React from "react";
import { storiesOf } from "@storybook/react";
import withLiveEditScope from "storybook-addon-react-live-edit/dist/withLiveEditScope";

import SNETPagination from "./";

storiesOf("SNETPagination", module)
  .addParameters({ props: { propTables: [SNETPagination] } })
  .addDecorator(withLiveEditScope({ React, SNETPagination }))
  .addLiveSource(
    "live source",
    `return   <SNETPagination limit={10}
                offset={10}
                totalCount={100}
                itemsPerPageOptions={[{value:10, label:"Ten"}, {value:20, label:"Twenty"}, {value:30, label:"Thirty"}]}
                itemsPerPage={10}
                onItemsPerPageChange={console.log}
                onPageChange={console.log}
              />`
  );
