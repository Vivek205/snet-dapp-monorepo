import React from "react";
import { Fragment } from "react";

export const generateDetailedErrorMessageFromValidation = (endpoint, validation) => (
  <Fragment>
    <br />
    <strong>{endpoint ? `Please fix the errors for ${endpoint}` : null}</strong>
    <ul>
      {validation.map(msg => (
        <li key={msg}>{msg}</li>
      ))}
    </ul>
  </Fragment>
);
