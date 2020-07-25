import React, { Component } from "react";
import PropTypes from "prop-types";

class GameList extends Component {
  render() {
    const { id, name } = this.props.game;
    return <div>{name}</div>;
  }
}

GameList.propTypes = {
  game: PropTypes.object.isRequired,
};

export default GameList;
