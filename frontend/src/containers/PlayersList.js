import React, { Component } from "react";
import { Button, Container, Grid, TextField } from "@material-ui/core";
import PropTypes from "prop-types";

export class PlayersList extends Component {
  render() {
    const { _id, name, score } = this.props.player;
    return (
      <Container
        style={{ fontSize: "20px", background: "#f3f3f3", width: "90%", margin: "5px", paddingTop: "10px" }}
      >
        <Grid container spacing={12} style={{margin: "5px"}}>
          <Grid item xs={4}>
            {name}
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => this.props.deletePlayer(_id)}>
              Delete Player
            </Button>
          </Grid>
          <Grid item xs={2}>
            Score: {score}
          </Grid>
          <Grid item xs={1}>
           <TextField
          id="number"
          label="Add Score"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        
          </Grid>
          <Grid item xs={1}>
          <Button color="primary">+</Button>
        <Button color="secondary">-</Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

PlayersList.propTypes = {
  player: PropTypes.object.isRequired,
};

export default PlayersList;
