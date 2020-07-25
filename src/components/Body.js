import React from "react";

import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import SingleInfluencer from "./SingleInfluencer";

import { useSelector } from "react-redux";

const Body = (props) => {
  const influencerFiltrati = useSelector(
    (state) => state.influencer.filteredInfluencer
  );
  if (influencerFiltrati.length === 0)
    return (
      <Container style={{ marginTop: 100, marginBottom: 100 }}>
        <Alert variant="warning">
          Nessun influencer rispetta i filtri impostati, ci dispiace{" "}
        </Alert>
      </Container>
    );
  return (
    <Container>
      <CardDeck
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {influencerFiltrati.map((p) => (
          <SingleInfluencer key={p.id} data={p} />
        ))}
      </CardDeck>
    </Container>
  );
};

export default Body;
