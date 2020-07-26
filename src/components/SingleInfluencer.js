import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setInfluencer } from "../store/actions/influencer";

const SingleInfluencer = (props) => {
  const dispatch = useDispatch();
  const { data } = props;
  return (
    <Card style={{ flexBasis: 300, marginTop: 40 }}>
      <Card.Img variant="top" src={data.img} className="card-image-sizeSet" />
      <Card.Body>
        <Card.Title>
          {data.nome} {data.cognome}
        </Card.Title>
        <Card.Text>{data.descrizione}</Card.Text>
        <Link
          to="/Profile"
          onClick={() => {
            dispatch(setInfluencer(data));
          }}
        >
          <Button variant="primary">Contatta</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default SingleInfluencer;
