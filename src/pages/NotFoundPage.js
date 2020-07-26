import React from "react";
import Container from "react-bootstrap/Container";

import Navigator2 from "../components/nav2";
import Header from "../components/Header3";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Container fluid="true">
      <Navigator2 to="/Home" variant="outline-light" text="Torna alla Home" />
      <Header />
      <Footer link="Home" />
    </Container>
  );
};

export default Home;
