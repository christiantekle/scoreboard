import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

class AddGame extends Component {
  state = {
    name: "",
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addGame(this.state.name);
    this.setState({ name: "" });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div style={formDiv}>
          <hr />
        <form onSubmit={this.onSubmit}>
          <TextField
          style={{ margin: 5 }}
          
            type="text"
            name="name"
            placeholder="Add Game here..."
            value={this.state.value}
            onChange={this.onChange}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            value="Add Game"
            className="btn"
            style={{ flex: "1" }}
          >
            Add Game
          </Button>
        </form>
      </div>
    );
  }
}
const formDiv = {
  margin: "0 auto",
  textAlign: "center",
};
export default AddGame;
