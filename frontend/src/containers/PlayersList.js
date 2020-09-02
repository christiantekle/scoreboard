import React, { Component } from "react";
import { Button, Container, Grid, TextField } from "@material-ui/core";
import PropTypes from "prop-types";

export class PlayersList extends Component {
  state = {
    score: 2,
  };

  IncrementScore = (id) => {
    this.setState ({ score: this.state.score + 1 })
    this.props.addScore(id)
  }
  DecrementScore = () => {
    this.setState({ score: this.state.score -1 })
  }

  render() {
    const { _id, name, score } = this.props.player;
    return (
      <Container
        style={{
          fontSize: "20px",
          background: "#f3f3f3",
          width: "90%",
          margin: "5px",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      >
        <Grid container spacing={11} style={{ margin: "5px" }}>
          <Grid item xs={4}>
            {name}
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => this.props.deletePlayer(_id)}>
              Delete Player
            </Button>
          </Grid>
          <Grid item xs={2}>
            Score: {this.state.score}
          </Grid>

          {/* <Grid item xs={1}>
            <TextField
              id="outlined-number"
              label="Add Score"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid> */}
          <Grid item xs={1}>
            <Button color="secondary" onClick={() => this.DecrementScore()}>-1</Button>
          </Grid>
          <Grid item xs={1}>
            <Button color="primary" onClick={() => this.IncrementScore(_id)}>+1</Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

PlayersList.propTypes = {
  player: PropTypes.object.isRequired,
  addScore: PropTypes.func.isRequired
};

export default PlayersList;
