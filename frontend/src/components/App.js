import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import axios from "axios";
import Header from "./layout/Header";
import About from "./pages/About";
import Games from "../containers/Games";
import AddGame from "../containers/AddGame";
import Play from "../containers/Play";

import * as gameActions from "../actions/game";

class App extends Component {
  state = {
    games: [],
  };

  async componentDidMount() {
    const response = await gameActions.getGames();
    this.setState({ games: response });
  }

  //add game

  // async addGame (name) {
  //   const response = await gameActions.addGame(name);
  //   this.setState({ games: [...this.state.games ]} )
  //  }
  async addGame(name) {
    try {
      const response = await axios.post("http://localhost:8000/api/games", {
        name,
        status: "Game Started",
      });
      this.setState({ games: [...this.state.games, response ] });
    }
    catch(error) {
      console.log(error);
    }
  }
 
  // addGame = (name) => {
  //   axios
  //     .post("http://localhost:8000/api/games", {
  //       name,
  //       status: "Game Started",
  //     })
  //     .then((res) => this.setState({ games: [...this.state.games, res.data] }));
  // };

  //del game
  delGame = (id) => {
    axios.delete(`http://localhost:8000/api/games/${id}`).then((res) => {
      this.setState({
        games: [...this.state.games.filter((game) => game._id !== id)],
      });
    });
  };
  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Container>
              <Header />
              <Route
                exact
                path="/"
                render={(props) => (
                  <React.Fragment>
                    <Games games={this.state.games} delGame={this.delGame} />
                    <AddGame addGame={this.addGame} />
                  </React.Fragment>
                )}
              />
              <Route path="/about" component={About} />
              <Route path="/play/:id" component={Play} />
            </Container>
          </div>
        </Switch>
      </Router>
    );
  }
}
export default App;
