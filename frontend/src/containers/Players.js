import React, {Component} from 'react';
import PlayersList from './PlayersList';
import PropTypes from 'prop-types';

class Players extends Component {
    render(){
        return this.props.players.map((player) => (
            <PlayersList key={player._id} player={player} deletePlayer={this.props.deletePlayer}/>
        ));
    }
}

//PropTypes
Players.propTypes = {
    player: PropTypes.array.isRequired,
}

export default Players;