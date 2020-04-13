import React from "react";
import { Fragment } from "react";

export const generateDetailedErrorMessageFromValidation = (endpoint, validation) => (
  <Fragment>
    <ul>
      <strong>{endpoint ? `Please fix the errors for ${endpoint}` : null}</strong>
      {validation.map(msg => (
        <li key={msg}>{msg}</li>
      ))}
    </ul>
  </Fragment>
);
