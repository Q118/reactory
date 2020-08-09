/** @format */

import React from "react";
// import plants from "../plants.json";
// import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

// const FILTER_MAP = {
//     All: () => true,
//     Active: plant => !plant.safeLongTerm,
//     Completed: plant => plant.safeLongTerm
//   };
// const filteredPlants = plants.filter(plant => plant.safeLongTerm === "Yes");


function Buttons(props) {
    // const [allPlants] = useState([...plants]);
    // const [safePlants] = useState(plants.filter(plant => plant.safeLongTerm === "Yes"));
    // const [unsafePlants] = useState(plants.filter(plant => plant.safeLongTerm === "No"));

    
    // const [filter, setFilter] = useState("All");


    //     setFilterOption(event.target);
    
    

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
                    onClick={props.handleFilterChange}
                    >
					Filter: Long-Term Safety
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


  
// handleFilter = (plantId) => {
//     this.setState({
//       list: this.state.list.filter((plant => plant.Safety >= 4)
//     });
//   }
  
