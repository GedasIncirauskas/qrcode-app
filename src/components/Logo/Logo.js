import React from "react";
import "./Logo.scss";

import logotipas from "../../asSet/warehouse.jpg";

const logo = () => (
  <div className="Logo">
    <img src={logotipas} alt="Mano logo" />
  </div>
);

export default logo;
