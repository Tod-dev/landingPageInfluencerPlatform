import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

// pages
import Home from "./pages/home";
import Search from "./pages/search";
import Contact from "./pages/contact";

//* redux store
import influencerReducer from "./store/reducers/influencer";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
const rootReducer = combineReducers({
  influencer: influencerReducer,
});

const store = createStore(rootReducer);
//* fine redux store

const App = () => {
  return (
    <Provider store={store}>
      <Container fluid="true">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </Container>
    </Provider>
  );
};

export default App;
