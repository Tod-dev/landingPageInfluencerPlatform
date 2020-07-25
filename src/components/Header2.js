import React from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import Message from "../components/message";

import ENV from "../env";

const Header = () => {
  const value = "passparolamail@prova.com";
  return (
    <Container fluid="true">
      <header className="masthead text-white text-center">
        <div className="overlay"></div>
        <Container>
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h1 className="mb-5">Contattaci e lascia la tua opinione </h1>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <form>
                <div className="form-row justify-content-center">
                  <Card className="mx-2">
                    <Card.Body style={{ color: "black" }}>{ENV.mail}</Card.Body>
                  </Card>
                  <Message value={value} text="Copia" />
                </div>
              </form>
            </div>
          </div>
        </Container>
      </header>
    </Container>
  );
};

export default Header;
