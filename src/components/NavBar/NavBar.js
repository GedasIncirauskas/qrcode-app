import React, { useState } from "react";
import Logo from "../../components/Logo/Logo";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./NavBar.scss";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="B">
      <Navbar style={{ backgroundColor: "#86c6c5" }} light expand="md">
        <Link to="/">
          <Logo />
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/">Sandėlys</Link>
            </NavItem>
            <NavItem>
              <Link to="/qr-generatorius">QR generatorius</Link>
            </NavItem>
            <NavItem>
              <Link to="/qr-skaitytuvas">QR skaitytuvas</Link>
            </NavItem>
          </Nav>
          <NavbarText></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
