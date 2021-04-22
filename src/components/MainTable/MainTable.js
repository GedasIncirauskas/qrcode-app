import React, { Component } from "react";

import { Button, Table } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "../../utils/request";
import "../../_base.scss";

class MainTable extends Component {
  state = {
    table: [],
  };

  componentDidMount() {
    axios
      .get("/products")
      .then((response) => {
        this.setState({ table: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  removeProduct(e, id, index) {
    axios
      .delete(`/products/${id}`)
      .then((response) => {
        this.state.table.splice(index, 1);
        this.setState({ table: this.state.table });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="body">
        <Table bordered>
          <thead className="printNotShow">
            <tr>
              <th>Produkto pavadinimas</th>
              <th>Produkto kaina</th>
              <th>Kiekis sandėlyje</th>
              <th>Veiksmas</th>
            </tr>
          </thead>
          {this.state.table.map((item, index) => (
            <tbody key={item.id}>
              <tr>
                <td>{item.name}</td>
                <td>
                  <strong>{item.price} EUR</strong>
                </td>
                <td>{item.unit}</td>
                <th>
                  <Button
                    outline
                    color="danger"
                    onClick={(e) => this.removeProduct(e, item.id, index)}
                  >
                    Trinti
                  </Button>{" "}
                  <Link to={`/redaguoti-produkta/${item.id}`}>
                    <Button outline color="info">
                      Redaguoti
                    </Button>
                  </Link>
                </th>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    );
  }
}

export default MainTable;
