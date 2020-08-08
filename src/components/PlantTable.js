import React from "react";
import plants from "../plants.json";

class PlantTable extends React.Component {
    state = { order: "ascending" };
  
    handleNameSort = () => {
      this.setState({
        order: this.state.order === "ascending" ? "descending" : "ascending",
      });
    };
    render() {
      const sortedplants = plants.sort((a, b) => {
        if (a.name === b.name) {
          return 0;
        }
        if (this.state.order === "ascending") {
          if (a.name < b.name) {
            return -1;
          }
          return 1;
        }
        if (a.name < b.name) {
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
                <th scope="col">Occupation</th>
                <th scope="col">Location</th>
              </tr>
            </thead>
            <tbody>
              {sortedplants.map((friend) => (
                <tr key={friend.id}>
                  <th scope="row">{friend.id}</th>
                  <td>{friend.name}</td>
                  <td>{friend.occupation}</td>
                  <td>{friend.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
  
  export default PlantTable;