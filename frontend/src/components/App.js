import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Header from "./layout/Header";
import About from "./pages/About";
import AddGame from "../containers/AddGame";
import axios from "axios";

class App extends Component {
  state = {
    games: [],
  };

  componentDidMount() {
    axios.get("http://localhost:8000/api/games").then((res) => {
      console.log(res);
      this.setState({ games: res.data });
    });
  }

  //add game
  addGame = (name) => {
    axios
      .post("http://localhost:8000/api/games", {
        name,
        status: "Game Started",
      })
      .then((res) => this.setState({ games: [...this.state.games, res.data] }));
  };

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
                  <AddGame addGame={this.addGame}/>
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