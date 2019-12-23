import React from "react";
import { storiesOf } from "@storybook/react";
import { SNETLoader } from ".";

storiesOf("AppLoader", module).add("_default", () => (
  <SNETLoader isLoading title="Sample Header" content="Please wait. this is a sample loader text" />
));
