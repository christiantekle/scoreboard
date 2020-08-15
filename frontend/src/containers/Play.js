import React, { Component } from "react";
import Players from "./Players";
import AddPlayer from "./AddPlayer";
import { Container } from "@material-ui/core";
import axios from "axios";

class Play extends Component {
  state = {
    players: [],
  };

  componentDidMount() {
    axios.get("http://localhost:8000/api/games").then((res) => {
      console.log(res.data);
      this.setState({ players: res.data });
    });
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
    return (
      <Container>
        <Players players={this.state.players} deletePlayer={this.deletePlayer}/>
        <AddPlayer addPlayer={this.addPlayer} />
      </Container>
    );
  }
}

export default Play;
