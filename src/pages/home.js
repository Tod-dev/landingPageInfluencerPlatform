import React from "react";
import Container from "react-bootstrap/Container";

import Navigator from "../components/nav2";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
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
