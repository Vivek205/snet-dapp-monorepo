import React from "react";
import isEmpty from "lodash/isEmpty";
import isArray from "lodash/isArray";
import isObject from "lodash/isObject";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const DaemonConfig = ({ config }) => {
  if (isEmpty(config)) {
    return null;
  }

  const convertObjectToUl = obj => {
    if (isEmpty(obj)) {
      return null;
    }
    return (
      <ul>
        {Object.entries(obj).map(([key, value]) => {
          if (isArray(value)) {
            return (
              <li key={key}>
                <strong>{key}</strong>
                <span>[{value.join(",")}]</span>
              </li>
            );
          } else if (isObject(value)) {
            return convertObjectToUl(value);
          }
          return (
            <li key={key}>
              <strong>{key}</strong>
              <span>{`${value}`}</span>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <Grid Item>
      <Typography variant="h4">Sample Daemon config</Typography> {convertObjectToUl(config)}
    </Grid>
  );
};

export default DaemonConfig;
