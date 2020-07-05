import React from "react";

import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import logo from "../assets/img/logo192.png";
import Col from "react-bootstrap/Col";

const Navigator = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
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
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav>
          <Form inline>
            <Form.Row>
              <Col xs={15}>
                <FormControl
                  type="text"
                  placeholder="Inflencer Milano Fitness"
                  className=""
                />
              </Col>
              <Col>
                <Button variant="outline-light">Cerca</Button>
              </Col>
            </Form.Row>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigator;
