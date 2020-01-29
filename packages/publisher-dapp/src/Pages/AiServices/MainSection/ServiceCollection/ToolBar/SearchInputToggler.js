import React from "react";
import Input from "@material-ui/core/Input";
import SearchIcon from "@material-ui/icons/Search";

const SearchInputToggler = ({ showSearchInput, toggleSearchInput, handleSearch, searchKeyword }) => {
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
