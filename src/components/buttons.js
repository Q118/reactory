/** @format */

import React from "react";
// import plants from "../plants.json";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

function Buttons(props) {
	return (
        <div className = "container buttonContainer">
		<div className="btn-group" role="group" aria-label="Basic example">
			<button className="btn btn-secondary" onClick={props.handleNameSort}>
				Left
			</button>
			<button className="btn btn-secondary">Right</button>
		</div>
        </div>
	);
}

export default Buttons;

// function sort(option) {
//     if (option === "id") {
//         const sorted = [...employees];
//         sorted.sort((a, b) => a.id > b.id ? 1 : -1);
//         // setSortedById(sorted);
//         setEmployees(sorted);
//         setSortOption("id");
//     } else if (option === "name") {
//         const sorted = [...employees];
//         sorted.sort((a, b) => a.name > b.name ? 1 : -1);
//         // setSortedByName(sorted);
//         setEmployees(sorted);
//         setSortOption("name");
//     }
//   }
