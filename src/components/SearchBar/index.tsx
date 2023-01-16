import React from "react";

const SearchBar = () => {
  return (
    <input
      type="text"
      placeholder="Search for ships..."
      className="form-input bg-searchbar-400 rounded-md border-none focus:ring-slate-700 focus:bg-transparent focus:ring-1 w-full min-h-[3rem] text-white-800 placeholder:text-slate-400 font-medium"
    />
  );
};

export default SearchBar;
