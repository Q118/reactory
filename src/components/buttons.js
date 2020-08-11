/** @format */

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
// import plantsJson from "../plants.json";
import SearchInput from "./SearchInput";

function Buttons(props) {


	return (
		<div className="container buttonContainer mb-2 text-center">
			<button
				type="button"
				className="nameButton btn-lg table-hover"
				onClick={props.handleNameSort}>
				Sort By Name
			</button>
			<SearchInput
				value={props.search}
				onChange={(event) => props.handleSearch(event.target.value)}
				
			/>
		</div>
	);
}

export default Buttons;
