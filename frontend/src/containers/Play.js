import React, { Component } from "react";
import Players from "./Players";
import AddPlayer from "./AddPlayer";
import { Container } from "@material-ui/core";
import axios from "axios";

class Play extends Component {
  state = {
    game: null,
    players: [],
  };

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const response = await axios.get(`http://localhost:8000/api/games/${params.id}`);
    this.setState({ game: response.data });
  }

  //Add Player
  addPlayer = (name, id) => {
    axios
      .post(`http://localhost:8000/api/games/${id}`, {
        name,
      })
      .then((res) =>
        this.setState({ players: [...this.state.plaers, res.data] })
      );
  };

  deletePlayer = (id) => {
    axios.delete(`http://localhost:8000/api/games/${id}`).then((res) => {
      this.setState({
        players: [...this.state.players.filter((player) => player._id !== id)],
      });
    });
  };

  render() {
    const { game } = this.state;
    return (
      <Container>
        {game ? (
          <div>
            <h2>Play Game {game && game.name}</h2>
            <Players players={game && game.players} deletePlayer={this.deletePlayer}/>
            <AddPlayer addPlayer={this.addPlayer} />
          </div>
        ): <div>Loading...</div>}
      </Container>
    );
  }
}

export default Play;
