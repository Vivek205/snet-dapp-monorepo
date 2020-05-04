import React from "react";
import { storiesOf } from "@storybook/react";
import withLiveEditScope from "storybook-addon-react-live-edit/dist/withLiveEditScope";

import JSONtoUl from "./";

const sampleJson = {
  allowed_user_flag: true,
  allowed_user_addresses: ["0x164096A3878DEd9C2A30c85D9c4b713d5305Ab10", "0x7DF35C98f41F3Af0df1dc4c7F7D4C19a71Dd059F"],
  authentication_addresses: ["0x164096A3878DEd9C2A30c85D9c4b713d5305Ab10"],
  blockchain_enabled: false,
  passthrough_enabled: true,
  organization_id: "anand_28apr",
  service_id: "anand_28apr",
};

storiesOf("Addons|JSON to Ul", module)
  .addDecorator(withLiveEditScope({ React, JSONtoUl, sampleJson }))
  .addLiveSource("live source", `return <div>{JSONtoUl(sampleJson)}</div> `);
