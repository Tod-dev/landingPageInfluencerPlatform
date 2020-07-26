import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Navigator from "../components/nav2";
import Profile from "../components/Profile";
import Footer from "../components/Footer";

import Container from "react-bootstrap/Container";

const InfluencerDetails = () => {
  const history = useHistory();
  const data = useSelector((state) => state.influencer.actualInfluencer);

  useEffect(() => {
    if (data === "unset") {
      history.push("/Home");
      return;
    }
  }, [data, history]);
  return (
    <Container fluid="true">
      <Navigator
        to="/Contact"
        variant="warning"
        text="Contattaci"
        style={{ color: "white", fontSize: 20 }}
      />
      <Profile data={data} />
      <Footer link="Contact" />
    </Container>
  );
};

export default InfluencerDetails;
