import React from "react";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { SocialIcon } from "react-social-icons";
import SOCIALS from "../data/socials";

const MyAccordion = (props) => {
  return (
    <Accordion style={{ marginTop: 20, marginBottom: 50 }}>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            MAIL
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{props.mail}</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            TELEFONO
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>{props.telefono}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

const Profile = (props) => {
  const { data } = props;
  //console.log(data.socials);
  return (
    <Container>
      <Card style={{ flex: 1, marginTop: 40 }}>
        <Card.Img variant="top" src={data.img} className="card-image-sizeSet" />
        <Card.Body>
          <Card.Title>
            {data.nome} {data.cognome}
          </Card.Title>
          <Card.Text>{data.descrizione}</Card.Text>
          <Container>
            {data.contatti ? (
              <MyAccordion
                mail={data.contatti.mail}
                telefono={data.contatti.telefono}
              />
            ) : null}
          </Container>
          <Container>
            <Row>
              {data.socials
                ? data.socials.map((social) => {
                    for (let i = 0; i < SOCIALS.length; i++) {
                      if (SOCIALS[i].id === social.id) {
                        let url = `${SOCIALS[i].url}${social.nomeUtente}`;
                        if (SOCIALS[i].id === "yt")
                          url = `${SOCIALS[i].url}c/${social.nomeUtente}`;
                        return (
                          <Col key={social.id} style={{ textAlign: "center" }}>
                            <SocialIcon url={url} />
                          </Col>
                        );
                      }
                    }
                    return null;
                  })
                : null}
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
