import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <Container fluid="true">
      <header className="masthead text-white text-center sfondo">
        <div className="overlay"></div>
        <Container className="text-left mx-auto">
          <Row>
            <div className="col-xl-9 mx-4">
              <h1 className="mb-5 titolo">
                <span>
                  Lancia la tua attività <br /> con il partner adatto
                </span>
              </h1>
            </div>
          </Row>
          <Row className="mr-2">
            <SearchBar />
          </Row>
        </Container>
      </header>
    </Container>
  );
};

export default Header;
