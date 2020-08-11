import React from "react";

function SearchInput({ onChange, value }) {
  return (
    <div className="my-4">
      <div className="form-group">
        <label htmlFor="search">Search</label>
        <input
          type="text"
          className="form-control"
          id="search"
          placeholder="search term"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default SearchInput;
