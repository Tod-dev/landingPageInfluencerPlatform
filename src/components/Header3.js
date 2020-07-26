import React from "react";

import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container fluid="true">
      <header className="masthead text-white text-center">
        <div className="overlay"></div>
        <Container>
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h1 className="mb-5">
                <Alert variant="warning">
                  Spiacienti, la pagina che ha cercato non esiste!
                </Alert>
              </h1>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <form>
                <div className="form-row justify-content-center">
                  <Link to="/Home">
                    <Button size="lg" variant={"primary"}>
                      Torna Alla Home
                    </Button>
                  </Link>
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
