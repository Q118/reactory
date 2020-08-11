/** @format */

import React from "react";
// import plants from "../plants.json";
// import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import SearchInput from "./SearchInput";

function Buttons(props) {
	return (
		<div className="container buttonContainer mb-2 text-center">
			<button className="nameButton btn btn-lg" onClick={props.handleNameSort}>
				Sort By Name
			</button>
			<SearchInput />
		</div>
	);
}

export default Buttons;
