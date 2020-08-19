import React, {Component} from 'react';
import {Button} from '@material-ui/core'
import PropTypes from 'prop-types';

export class PlayersList extends Component {
    render() {
        const { _id, name } = this.props.player;
        return(
            <div>
                {name} <Button onClick={() => this.props.deletePlayer(_id)}>Delete Player</Button>
            </div>
        )
    }
}

PlayersList.propTypes = {
    player: PropTypes.object.isRequired
}

export default PlayersList;