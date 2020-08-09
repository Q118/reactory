/** @format */

import React from "react";
// import plants from "../plants.json";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

function Buttons(props) {
    
   

	return (
		<div className="container buttonContainer mb-2 text-center">
			<div className="btn-group" role="group" aria-label="Basic example">
				<button
					className="btn nameButton btn-lg"
					onClick={props.handleNameSort}>
					Sort By Name
				</button>
				&nbsp;&nbsp;&nbsp;
				<button
					className="btn safeButton btn-lg"
                    onClick={props.handleFilter}
                    >
					Filter: At Least 4 Safety
				</button>
			</div>
		</div>
	);
}

export default Buttons;

// <Filter
// filterOption={filterOption}
// handleFilterChange={(e) => setFilterOption(e.target.value)}
// />
// onChange={props.handleFilterChange}

// handleSafetyFilter = () => {
//     let lowSafe = plants.filter(plant => plant.Safety <= 4);
//     let shighSafe = plants.filter(plant => plant.Safety >= 4);
//     this.setState({
// 			filter: this.state.filter === "ascending" ? "descending" : "ascending",
// 		});
//   }

  
// handleFilter = (plantId) => {
//     this.setState({
//       list: this.state.list.filter((plant => plant.Safety >= 4)
//     });
//   }
  
