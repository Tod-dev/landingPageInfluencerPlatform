import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Home from "./pages/home";
import Contact from "./pages/contact";

const App = () => {
  return (
    <Container fluid="true">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
