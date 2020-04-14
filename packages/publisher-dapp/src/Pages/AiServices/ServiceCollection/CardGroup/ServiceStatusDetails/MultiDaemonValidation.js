import React from "react";
import { Fragment } from "react";

export const generateDetailedErrorMessageFromValidation = validation => {
  const strongStyle = {
    display: "block",
    fontWeight: "700",
    marginLeft: "-50px",
  };
  return (
    <Fragment>
      <ul>
        {validation.map(msg =>
          msg.includes("fix") ? (
            <li style={strongStyle} key={msg}>
              {msg}
            </li>
          ) : (
            <li key={msg}>{msg}</li>
          )
        )}
      </ul>
    </Fragment>
  );
};
