import React from "react";
import { useSelector } from "react-redux";

import SNETLoader from "shared/dist/components/SNETLoader";

const Loader = () => {
  const { isLoading, title, content } = useSelector(state => state.loader.initServiceCreation);

  return <SNETLoader isLoading={isLoading} title={title} content={content} />;
};

export default Loader;
