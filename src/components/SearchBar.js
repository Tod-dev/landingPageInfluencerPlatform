import React from "react";

import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const SearchBar = () => {
  return (
    <Container fluid="md">
      <InputGroup className="mx-3 my-3">
        <FormControl
          placeholder="Nome"
          aria-label="influencer"
          aria-describedby="basic-addon1"
          size="lg"
        />
        <FormControl
          size="lg"
          placeholder="Posizione"
          aria-label="Posizione"
          aria-describedby="basic-addon1"
        />
        <FormControl
          size="lg"
          as="select"
          placeholder="Categorie"
          aria-label="Categorie"
          aria-describedby="basic-addon1"
        >
          <option selected="selected" disabled>
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
