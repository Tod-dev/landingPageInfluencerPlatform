import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

import { useSelector } from "react-redux";

const Filters = (props) => {
  const cat = useSelector((state) => state.influencer.category);
  const pos = useSelector((state) => state.influencer.position);

  return (
    <Container className="filter-container">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <span className="filter-title">Posizione:</span>
              {pos.name}, {pos.sigla}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <span className="filter-title">Categoria:</span>
              {cat}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Card style={{ textAlign: "center" }}>altri filtri...</Card>{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default Filters;
