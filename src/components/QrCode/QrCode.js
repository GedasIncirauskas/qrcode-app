import React, { Component } from "react";
import QRCode from "qrcode.react";
import axios from "../../utils/request";
import { Button, Form, FormGroup, Label, Input, Table } from "reactstrap";
import "../../_base.scss";

class QrCode extends Component {
  state = {
    sarasas: [],
    result: "",
  };

  componentDidMount() {
    axios
      .get("/products")
      .then((response) => {
        this.setState({ sarasas: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  printQr() {
    window.print();
  }

  searchHandler(event) {
    this.setState({ result: event.target.value });
  }

  render() {
    let filterContent = this.state.sarasas.filter((item) => {
      return (
        item.name.toLowerCase().indexOf(this.state.result.toLowerCase()) !== -1
      );
    });

    return (
      <div className="body">
        <Form>
          <FormGroup>
            <Label for="exampleSearch">Paieška:</Label>
            <Input
              autoFocus
              type="search"
              name="search"
              id="exampleSearch"
              placeholder="Ieškoti produkto"
              onChange={this.searchHandler.bind(this)}
              value={this.state.result}
            />
          </FormGroup>
        </Form>
        <Button
          color="success"
          className="printNotShow"
          style={{ marginBottom: "15px" }}
          onClick={() => this.printQr()}
        >
          Spausdinti QR kodus
        </Button>
        <Table bordered>
          <thead className="printNotShow">
            <tr>
              <th>Produkto pavadinimas</th>
              <th>Produkto kaina</th>
              <th>QR kodas</th>
            </tr>
          </thead>
          {filterContent.map((item, index) => (
            <tbody key={item.id}>
              <tr>
                <td className="printNotShow">{item.name}</td>
                <td className="printNotShow">
                  <strong>{item.price} EUR</strong>
                </td>
                <td>
                  <QRCode
                    value={item.id.toString()}
                    renderAs="svg"
                    style={{
                      width: "80px",
                      height: "80px",
                    }}
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    );
  }
}

export default QrCode;
