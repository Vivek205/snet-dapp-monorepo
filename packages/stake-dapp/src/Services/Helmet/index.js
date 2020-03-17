import React from "react";
import { Helmet } from "react-helmet";
import { helmet } from "./content";

const DefaultHelmet = () => {
  return (
    <Helmet>
      <title>{helmet.title}</title>
      {helmet.metaTags.map(({ name, content }) => (
        <meta key={name} name={name} content={content} />
      ))}
    </Helmet>
  );
};

export default DefaultHelmet;
