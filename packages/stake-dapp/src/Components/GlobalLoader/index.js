import React from "react";

import SNETLoader from "shared/dist/components/SNETLoader";
import { useSelector } from "react-redux";

const GlobalLoader = () => {
  const { isLoading, title, content } = useSelector(state => state.loader.app);

  return <SNETLoader isLoading={isLoading} title={title} content={content} />;
};

export default GlobalLoader;
