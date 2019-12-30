import React from "react";
import Input from "@material-ui/core/Input";
import SearchIcon from "@material-ui/icons/Search";

import { useStyles } from "./styles";

const SearchInputToggler = ({ showSearchInput, toggleSearchInput, handleSearch, searchKeyword }) => {
  const classes = useStyles();
  const handleBlur = () => {
    if (searchKeyword !== "") {
      return;
    }
    toggleSearchInput(false);
  };

  if (showSearchInput) {
    return <Input error onBlur={handleBlur} autoFocus onChange={handleSearch} value={searchKeyword} />;
  }
  return <SearchIcon onClick={() => toggleSearchInput(true)} />;
};

export default SearchInputToggler;
