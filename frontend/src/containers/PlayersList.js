import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class PlayersList extends Component {
    render() {
        const { _id, name } = this.props.player;
        return(
            <div>
                {name}
            </div>
        )
    }
}

PlayersList.propTypes = {
    player: PropTypes.object.isRequired
}

export default PlayersList;