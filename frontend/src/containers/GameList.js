import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Card, CardContent, Button, ButtonGroup } from "@material-ui/core";
import Play from "./Play";

class GameList extends Component {

  render() {
    const { _id, name } = this.props.game;
    const { history } = this.props;

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

            <Button onClick={() => history.push(`/play/${_id}`)}>Play</Button>

            <Button color="secondary" onClick={() => this.props.delGame(_id)}>
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

export default withRouter(GameList);
