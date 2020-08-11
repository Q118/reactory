/** @format */

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import plantsJson from "../plants.json";
import SearchInput from "./SearchInput";


function Buttons(props) {
	const [search, setSearch] = useState("");
	let plants;
	if (!search) {
		plants = plantsJson;
	} else {
		plants = plantsJson.filter((plant) => {
			return plant.Name.toLowerCase().includes(search.toLowerCase());
		});
	}

	return (
		<div className="container buttonContainer mb-2 text-center">
			<button
				type="button"
				className="nameButton btn-lg table-hover"
				onClick={props.handleNameSort}>
				Sort By Name
			</button>
			<SearchInput
				value={search}
				onChange={(event) => setSearch(event.target.value)}
				plants = {plants}
			/>
			
		</div>
	);
}

export default Buttons;
