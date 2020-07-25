import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const SingleInfluencer = (props) => {
  const { data } = props;
  return (
    <Card style={{ flexBasis: 300, marginTop: 40 }}>
      <Card.Img
        variant="top"
        src={data.img}
        style={{
          width: "100%",
          height: "15vw",
          objectFit: "cover",
          minHeight: "20rem",
        }}
      />
      <Card.Body>
        <Card.Title>
          {data.nome} {data.cognome}
        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={() => {}}>
          Contatta
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleInfluencer;
