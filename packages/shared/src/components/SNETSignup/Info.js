import React, { Fragment } from "react";
import PropTypes from "prop-types";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const Info = props => {
  const { title, description, list } = props;
  return (
    <Fragment>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {list.map(item => (
          <li key={item}>
            <CheckCircleIcon />
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

Info.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
};

export default Info;
