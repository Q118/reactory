/** @format */

import React from "react";
import plants from "../plants.json";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import Buttons from "./buttons";

class PlantTable extends React.Component {
	state = { order: "ascending" };

	// function to sort by Name
	handleNameSort = () => {
		this.setState({
			order: this.state.order === "ascending" ? "descending" : "ascending",
		});
	};

	render() {
		const sortedPlants = plants.sort((a, b) => {
			if (a.Name === b.Name) {
				return 0;
			}
			if (this.state.order === "ascending") {
				if (a.Name < b.Name) {
					return -1;
				}
				return 1;
			}
			if (a.Name < b.Name) {
				return 1;
			}
			return -1;
		});

		return (
			<div className="container mt-4">
				<header className="headerContainer mb-2 pt-2 text-center">
					<h1>Medicinal Plants</h1>
				</header>
				<Buttons
					handleNameSort={this.handleNameSort}
					onChange={this.onChange}
				/>
				<table className="table tableContainer table-hover">
					<thead>
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Name</th>
							<th scope="col">Benefits</th>
							<th scope="col">Safe Long-Term?</th>
							<th scope="col">Picture</th>
						</tr>
					</thead>
					<tbody>
						{sortedPlants.map((plant) => (
							<tr key={plant.Id}>
								<th scope="row">{plant.Id}</th>
								<td>
									<strong>{plant.Name}</strong>
								</td>
								<td>{plant.Benefits}</td>
								<td>{plant.safeLongTerm}</td>
								<td>
									{" "}
									<img alt={plant.Name} src={plant.Image} className="picture" />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default PlantTable;
