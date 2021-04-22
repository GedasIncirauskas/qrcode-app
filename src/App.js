import React from "react";
import PropTypes from "prop-types";
import NavBar from "./components/NavBar/NavBar";

const App = (props) => (
  <div>
    <NavBar />
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.any,
};

export default App;
