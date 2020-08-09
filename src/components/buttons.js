/** @format */

import React from "react";
// import plants from "../plants.json";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

function Buttons(props) {
	return (
		<div className="container buttonContainer mb-2 text-center">
			<div className="btn-group" role="group" aria-label="Basic example">
				<button className="btn nameButton btn-lg" onClick={props.handleNameSort}>
					Sort By Name
				</button> 
                &nbsp;&nbsp;&nbsp;
				<button className="btn safeButton btn-lg">Filter: Safety Above 4</button>
			</div>
		</div>
	);
}

export default Buttons;


