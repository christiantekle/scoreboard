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
    const response = await axios.get(
      `http://localhost:8000/api/games/${params.id}`
    );
    this.setState({ game: response.data });
  }

  //AddPlayer
  addPlayer = async (name) => {
    try {
      const { match } = this.props;
      const { params } = match;

      const response = await axios.put(
        `http://localhost:8000/api/games/${params.id}`,
        {
          name,
        }
      );

      this.setState({ players: [...this.state.players, response] });
    } catch (err) {
      console.log(err);
    }
  };
 
  //AddScore

addScore = (score, _id) => {
  axios
  .put(`http://localhost:8000/api/score/${_id}`, {
    score,
  })
  .then(res => this.setState( { score: []} ))

}
  //Delete Player
  async deletePlayer(id) {
    try {
      await axios.delete(`http://localhost:8000/api/players/${id}`);
      this.setState({
        players: [...this.state.players.filter((player) => player._id !== id)],
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { game } = this.state;
    return (
      <Container>
        {game ? (
          <div>
            <h2>Play Game {game && game.name}</h2>
         
            <Players
              players={game && game.players}
              deletePlayer={this.deletePlayer}
            />
            <AddPlayer addPlayer={this.addPlayer} />
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </Container>
    );
  }
}

export default Play;
