import React from "react";
import { storiesOf } from "@storybook/react";
import withLiveEditScope from "storybook-addon-react-live-edit/dist/withLiveEditScope";

import PrettyPrintJson from "./";

const sampleList = ["completed", "active", "idle"];

storiesOf("Addons|PrettyPrintJson", module)
  .addParameters({ props: { propTables: [PrettyPrintJson] } })
  .addDecorator(withLiveEditScope({ React, PrettyPrintJson, sampleList }))
  .addLiveSource(
    "live source",
    `return <PrettyPrintJson 
            data={
              {"menu": {
                 "id": "file",
                 "value": "File",
                 "popup": {
                  "menuitem": [
                    {"value": "New", "onclick": "CreateNewDoc()"},
                    {"value": "Open", "onclick": "OpenDoc()"},
                    {"value": "Close", "onclick": "CloseDoc()"}
                   ]
              }}}
            } 
     />`
  );
