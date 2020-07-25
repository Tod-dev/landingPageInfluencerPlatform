import React, { useState, useRef, useEffect, useCallback } from "react";

import { Link } from "react-router-dom";

// bootstrap
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";

//data
import provincie from "../data/posizioni";
import categorie from "../data/categorie";

// redux
import { useDispatch } from "react-redux";
import { setCategoria, setPosizione } from "../store/actions/influencer";

const SearchBar = () => {
  const dispatch = useDispatch();

  const target = useRef(null);
  const target2 = useRef(null);

  const [isFirstTouch, setIsFirstTouch] = useState(true);
  const [position, setPosition] = useState("Posizione");
  const [category, setCategory] = useState("Categorie");
  const [isValid, setIsValid] = useState(false);
  const [error1, setError1] = useState();
  const [error2, setError2] = useState();

  const checkIsValid = useCallback(() => {
    if (position !== "Posizione" && category !== "Categorie") setIsValid(true);
    else if (isFirstTouch) {
      return;
    } else setIsValid(false);
    if (position === "Posizione") setError1("Inserire una posizione valida!");
    else setError1(null);
    if (category === "Categorie") setError2("Inserire una categoria valida!");
    else setError2(null);
  }, [category, position, isFirstTouch]);

  useEffect(() => {
    checkIsValid();
  }, [checkIsValid, position, category]);

  const positionChange = (event) => {
    setPosition(event.target.value);
  };

  const categoryChange = (event) => {
    setCategory(event.target.value);
  };

  const linkClickHandler = () => {
    //console.log(position, category);
    dispatch(setPosizione(position));
    dispatch(setCategoria(category));
  };

  return (
    <Container fluid="md">
      <InputGroup className="mx-3 my-3">
        <FormControl
          size="lg"
          as="select"
          placeholder="Posizione"
          aria-label="Posizione"
          value={position}
          aria-describedby="basic-addon1"
          onChange={positionChange}
          ref={target}
        >
          <option value="Posizione" disabled>
            Posizione
          </option>
          {provincie.map((prov) => (
            <option key={prov.sigla} value={prov.sigla}>
              {prov.nome}
            </option>
          ))}
        </FormControl>
        <FormControl
          size="lg"
          as="select"
          placeholder="Categorie"
          aria-label="Categorie"
          aria-describedby="basic-addon1"
          onChange={categoryChange}
          value={category}
          ref={target2}
        >
          <option value="Categorie" disabled>
            Categorie
          </option>
          {categorie.map((cat) => (
            <option key={cat.id} value={cat.nome}>
              {cat.nome}
            </option>
          ))}
        </FormControl>
        {isValid ? (
          <Link
            to={{
              pathname: "/search",
              state: {
                auth: "fromHome",
              },
            }}
            onClick={linkClickHandler}
          >
            <Button
              variant="primary"
              size="lg"
              style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            >
              Cerca
            </Button>
          </Link>
        ) : (
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              setIsFirstTouch(false);
              checkIsValid();
            }}
          >
            Cerca
          </Button>
        )}

        <Overlay
          target={target.current}
          show={error1 ? true : false}
          placement="bottom"
        >
          {({ placement, arrowProps, show: _show, popper, ...props }) => (
            <div
              {...props}
              style={{
                backgroundColor: "rgba(255, 100, 100, 0.85)",
                padding: "2px 10px",
                color: "white",
                borderRadius: 3,
                ...props.style,
              }}
            >
              {error1}
            </div>
          )}
        </Overlay>

        <Overlay
          target={target2.current}
          show={error2 ? true : false}
          placement="bottom"
        >
          {({ placement, arrowProps, show: _show, popper, ...props }) => (
            <div
              {...props}
              style={{
                backgroundColor: "rgba(255, 100, 100, 0.85)",
                padding: "2px 10px",
                color: "white",
                borderRadius: 3,
                ...props.style,
              }}
            >
              {error2}
            </div>
          )}
        </Overlay>
      </InputGroup>
    </Container>
  );
};

export default SearchBar;
