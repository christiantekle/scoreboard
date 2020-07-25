import React, { Component } from "react";
import PropTypes from "prop-types";
import GameList from "./GameList";

class Games extends Component {
  render() {
    return this.props.games.map((game) => (
      <GameList key={game.id} game={game} />
    ));
  }
}

//PropTpes
Games.propTypes = {
  games: PropTypes.array.isRequired,
};

export default Games;
