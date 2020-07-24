import React from "react";

import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import logo from "../assets/img/logo192.png";

const Navigator = (props) => {
  return (
    <Navbar sticky="top" bg="primary" variant="dark" expand="lg">
      <Link to="/Home">
        <Navbar.Brand href="">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            style={{ marginRight: 30 }}
            alt="/"
          />
          PassaParola.it
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-end mr-5"
      >
        <Nav>
          <Link to={props.to}>
            <Button style={props.style} variant={props.variant}>
              {props.text}
            </Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigator;
