import React from "react";
import Container from "react-bootstrap/Container";

import Navigator from "../components/nav";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Container fluid="true">
      <Navigator />
      <Header />
      <Footer link="Contact" />
    </Container>
  );
};

export default Home;
