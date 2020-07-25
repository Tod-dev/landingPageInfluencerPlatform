import React, { useEffect } from "react";

import Container from "react-bootstrap/Container";

import Navigator from "../components/nav2";
import Footer from "../components/Footer";
import Filters from "../components/Filters";
import Body from "../components/Body";

import { useHistory } from "react-router-dom";

import { useSelector } from "react-redux";

const Search = (props) => {
  const cat = useSelector((state) => state.influencer.category);
  const pos = useSelector((state) => state.influencer.position);
  const history = useHistory();

  const goBack = () => {
    history.push("/Home");
  };

  useEffect(() => {
    if (!cat || !pos.name || !pos.sigla) {
      goBack();

      return;
    }
    const check = props.history.location.state;
    if (!check) {
      goBack();
      return;
    }
    if (!check.hasOwnProperty("auth")) {
      goBack();
      return;
    }
    if (check.auth !== "fromHome") {
      goBack();
      return;
    }
  });

  return (
    <Container fluid="true">
      <Navigator
        to="/Contact"
        variant="warning"
        text="Contattaci"
        style={{ color: "white", fontSize: 20 }}
      />
      <Filters />
      <Body />
      <Footer link="Contact" />
    </Container>
  );
};

export default Search;
