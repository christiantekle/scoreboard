import React, { Component } from "react";
import Players from "./Players";
import { Container } from "@material-ui/core";
import axios from "axios";

class Play extends Component {
  state = {
    players: [],
  };

  componentDidMount() {
    axios.get("http://localhost:8000/api/players/id").then((res) => {
      console.log(res.data);
      this.setState({ players: res.data });
    });
  }

  render() {
    return (
      <Container>
        Play
        <Players players={this.state.players} />
      </Container>
    );
  }
}

export default Play;
