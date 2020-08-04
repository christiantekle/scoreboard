import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Button, ButtonGroup } from "@material-ui/core";

class GameList extends Component {
    
  render() {
    const { _id, name } = this.props.game;
    return (
      <Card style={cardStyle}>
        <CardContent>
          {name}
          <ButtonGroup
            style={btngrpStyle}
            variant="text"
            color="primary"
            aria-label="text primary button group"
          >
            <Button>Play</Button>
            <Button
              color="secondary"
              onClick={() => this.props.delGame(_id)}
            >
              Delete
            </Button>
          </ButtonGroup>
        </CardContent>
      </Card>
    );
  }
}

GameList.propTypes = {
  game: PropTypes.object.isRequired,
  delGame: PropTypes.func.isRequired,
};
const btngrpStyle = {
  float: "right",
};
const cardStyle = {
  width: "65%",
  padding: "5px",
  margin: "10px auto",
  fontSize: "18px",
  fontWeight: "500",
};

export default GameList;
