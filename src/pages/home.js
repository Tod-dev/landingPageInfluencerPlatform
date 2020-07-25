import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";

import Navigator from "../components/nav2";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useDispatch } from "react-redux";
import { resetFilter } from "../store/actions/influencer";

const Home = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetFilter());
  });
  return (
    <Container fluid="true">
      <Navigator
        to="/Contact"
        variant="warning"
        text="Contattaci"
        style={{ color: "white", fontSize: 20 }}
      />
      <Header />
      <Footer link="Contact" />
    </Container>
  );
};

export default Home;
