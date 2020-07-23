import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button, Container } from "@material-ui/core";
import Header from "./components/layout/Header";
import About from "./components/pages/About";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Container>
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <Button color="primary">Testing...</Button>
                </React.Fragment>
              )}
            />
            <Route path="/About" component={About} />
          </Container>
        </div>
      </Router>
    );
  }
}
export default App;
