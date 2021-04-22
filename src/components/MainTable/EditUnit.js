import React, { Component } from "react";

import { Button, Form, FormGroup, Input, Table } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "../../utils/request";
import "../../_base.scss";

class EdidUnit extends Component {
  state = {
    infoProduct: {},
    kiekis: 0,
  };

  componentDidMount() {
    axios
      .get(`/products/${this.props.match.params.product}`)
      .then((response) => {
        this.setState({ infoProduct: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  moreHandler() {
    this.setState({ kiekis: this.state.kiekis + 1 });
  }

  lessHandler() {
    if (this.state.kiekis <= 0) {
      return;
    }
    this.setState({ kiekis: this.state.kiekis - 1 });
  }

  changeValue(event, reiksme) {
    this.state.kiekis = reiksme;
    this.setState({ kiekis: this.state.kiekis });
  }

  updateUnit() {
    window.location.href = `/`;
  }

  render() {
    return (
      <div className="body">
        <Table bordered>
          <thead>
            <tr>
              <th>Produkto pavadinimas</th>
              <th>Kiekis</th>
              <th>Veiksmai</th>
            </tr>
          </thead>
          <tbody key={this.state.infoProduct.id}>
            <tr>
              <td>{this.state.infoProduct.name}</td>
              <td>
                <Form>
                  <FormGroup>
                    <Input
                      type="number"
                      placeholder="Kiekis"
                      value={this.state.kiekis}
                      onChange={(event) => this.changeValue(event.target.value)}
                    />
                  </FormGroup>
                </Form>
              </td>
              <td>
                <Button
                  outline
                  color="success"
                  onClick={() => this.moreHandler()}
                >
                  Pridėti
                </Button>{" "}
                <Button
                  outline
                  color="danger"
                  onClick={() => this.lessHandler()}
                >
                  Atimti
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <Link to={`/`}>
          <Button outline color="info" onClick={() => this.updateUnit()}>
            Atnaujinti
          </Button>
        </Link>
      </div>
    );
  }
}

export default EdidUnit;
