import React, { Component } from "react";
import PropTypes from "prop-types";
import GameList from "./GameList";

class Games extends Component {
  render() {
    return this.props.games.map((game) => (
      <GameList key={game.id} game={game} delGame={this.props.delGame}/>
    ));
  }
}

//PropTpes
Games.propTypes = {
  games: PropTypes.array.isRequired,
  delGame: PropTypes.func.isRequired
};

export default Games;
