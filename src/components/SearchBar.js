import React from "react";

import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import provincie from "../data/posizioni";

const SearchBar = () => {
  const pos = provincie;
  console.log(pos);
  return (
    <Container fluid="md">
      <InputGroup className="mx-3 my-3">
        <FormControl
          size="lg"
          as="select"
          placeholder="Posizione"
          aria-label="Posizione"
          aria-describedby="basic-addon1"
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled>
            Posizione
          </option>
        </FormControl>
        <FormControl
          size="lg"
          as="select"
          placeholder="Categorie"
          aria-label="Categorie"
          aria-describedby="basic-addon1"
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled>
            Categorie
          </option>
          <option>Fitness</option>
          <option>Business</option>
          <option>Food</option>
          <option>Vlog</option>
        </FormControl>

        <Button variant="primary" type="submit" size="md">
          Cerca
        </Button>
      </InputGroup>
    </Container>
  );
};

export default SearchBar;
