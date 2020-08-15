import React, { Component } from "react";
import { TextField, Button } from "material-ui/core";

class AddPlayer extends Component {
  state = {
    name: "",
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.state.name);
    this.setState({ name: "" });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <TextField
            type="name"
            text="text"
            placeholder="Add Player here..."
            value={this.state.value}
            onChange={this.onChange}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            value="Add Player"
            style={{ flex: "1" }}
          >
            Add Player
          </Button>
        </form>
      </div>
    );
  }
}

export default AddPlayer;
