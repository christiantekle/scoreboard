import React, { Component } from "react";

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
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="name"
          style={{ flex: "5", padding: "5px" }}
          placeholder="Add Game here..."
          value={this.state.value}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Add Game"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}
export default AddGame;
