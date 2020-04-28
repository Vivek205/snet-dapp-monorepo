import React from "react";
import { storiesOf } from "@storybook/react";
import withLiveEditScope from "storybook-addon-react-live-edit/dist/withLiveEditScope";
import { BrowserRouter as ReactRouter } from "react-router-dom";

import SNETSignup from "./";

storiesOf("SNETSignup", module)
  .addParameters({ props: { propTables: [SNETSignup] } })
  .addDecorator(withLiveEditScope({ React, SNETSignup, ReactRouter }))
  .addLiveSource(
    "live source",
    `return   <ReactRouter>
                <SNETSignup 
                  info={{
                    title:"SingularityNet",
                    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem " +
                     "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer " +
                     "took a galley of type and scrambled it to make a type specimen book. It has survived not only " +
                     "five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " +
                     "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum " +
                     "passages, and more recently with desktop publishing software like Aldus PageMaker including " +
                     "versions of Lorem Ipsum.",
                    list:["aaa","bbb"]}}
                   onSubmit={console.log}/>  
              </ReactRouter>`
  );
