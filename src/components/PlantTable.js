import React from "react";
import plants from "../plants.json";
import "bootstrap/dist/css/bootstrap.css";

class PlantTable extends React.Component {
    state = { order: "ascending" };
  

    // function to soprt by Name
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
        <div>
          <header>
            <h1>plants Table</h1>
          </header>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th onClick={this.handleNameSort} scope="col">
                  Name
                </th>
                <th scope="col">Benefits</th>
                <th scope="col">Safety</th>
              </tr>
            </thead>
            <tbody>
              {sortedPlants.map((plant) => (
                <tr key={plant.Id}>
                  <th scope="row">{plant.Id}</th>
                  <td>{plant.Name}</td>
                  <td>{plant.Benefits}</td>
                  <td>{plant.Safety}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
  
  export default PlantTable;