import React, { Component } from "react";
import QrReader from "react-qr-reader";

import { Card, CardHeader, CardBody } from "reactstrap";

import axios from "../../utils/request";
import "./QrScan.css";

class ScannQr extends Component {
  state = {
    result: "",
  };

  handleScan = (data) => {
    if (data) {
      axios
        .get(`/products/${data}/exists`)
        .then((response) => {
          window.location.href = `/redaguoti-produkta/${data}`;
        })
        .catch((error) => {
          console.log(error);
        });
      this.setState({ result: data });
    }
  };
  handleError = (err) => {
    console.error(err);
  };

  render() {
    return (
      <div>
        <Card>
          <CardHeader style={{ textAlign: "center" }}>
            <h3>Skanuokite pasirinktą prekę</h3>
          </CardHeader>
          <CardBody>
            {!this.state.result ? (
              <QrReader
                delay={300}
                onError={this.handleError}
                onScan={this.handleScan}
                style={{ width: "300px" }}
              />
            ) : null}
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ScannQr;
