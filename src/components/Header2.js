import React, { useState, useRef } from "react";

import Container from "react-bootstrap/Container";
import Tooltip from "react-bootstrap/Tooltip";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";

import { CopyToClipboard } from "react-copy-to-clipboard";

const Header = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

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
                    <Card.Body style={{ color: "black" }}>
                      passparolamail@prova.com
                    </Card.Body>
                  </Card>

                  <CopyToClipboard text={value} onCopy={() => setShow(true)}>
                    <Button
                      variant="primary"
                      size="lg"
                      className="mx-2"
                      ref={target}
                    >
                      Copia
                    </Button>
                  </CopyToClipboard>
                  <Overlay
                    target={target.current}
                    show={show}
                    placement="right"
                  >
                    {(props) => (
                      <Tooltip id="overlay-example" {...props}>
                        Copiato!
                      </Tooltip>
                    )}
                  </Overlay>
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
