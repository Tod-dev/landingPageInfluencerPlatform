import React from "react";
import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Container from "react-bootstrap/Container";

// pages
import Home from "./pages/home";
import Search from "./pages/search";
import Contact from "./pages/contact";
import Influencer from "./pages/InfluencerDetails";
import NotFoundPage from "./pages/NotFoundPage";

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
            <Route exact path="/profile" component={Influencer} />
            <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </Container>
    </Provider>
  );
};

export default App;
