import React, { useState, useRef } from "react";

import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";

import { CopyToClipboard } from "react-copy-to-clipboard";

const Message = (props) => {
  const target = useRef(null);
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <CopyToClipboard text={props.value} onCopy={() => setShow(true)}>
        <Button variant="primary" size="lg" className="mx-2" ref={target}>
          {props.text}
        </Button>
      </CopyToClipboard>
      <Overlay target={target.current} show={show} placement="top">
        {(props) => (
          <Tooltip id="overlay" {...props}>
            Copiato!
          </Tooltip>
        )}
      </Overlay>
    </React.Fragment>
  );
};

export default Message;
