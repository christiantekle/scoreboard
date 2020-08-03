import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Header from "./layout/Header";
import About from "./pages/About";
import Games from "../containers/Games";
import AddGame from "../containers/AddGame";
import axios from "axios";

class App extends Component {
  state = {
    games: [],
  };

  componentDidMount() {
    axios.get("http://localhost:8000/api/games").then((res) => {
      console.log(res.data);
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

  //del game
  delGame = (id) => {
    axios.delete(`localhost:8000/api/games/${id}`).then((res) =>
      this.setState({
        games: [...this.state.games.filter((game) => game.id !== id)],
      })
    );
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
                  <Games games={this.state.games} />
                  <AddGame addGame={this.addGame} delGame={this.delGame} />
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
