/** @format */

import React from "react";

function SearchInput({ onChange, value }) {
	return (
		<div className="container w-25 safeButton mt-3 pt-2">
			<div className="form-group">
				<label htmlFor="search">Filter</label>
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
