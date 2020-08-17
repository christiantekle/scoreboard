import React, { Component } from "react";
import PropTypes from "prop-types";
import GameList from "./GameList";

class Games extends Component {
  render() {
    const { games } = this.props;
    return games ? games.map((game) => (
      <GameList key={game.id} game={game} delGame={this.props.delGame}/>
    )) : <div>Empty List</div>;
  }
}

//PropTpes
Games.propTypes = {
  games: PropTypes.array.isRequired,
  delGame: PropTypes.func.isRequired
};

export default Games;
