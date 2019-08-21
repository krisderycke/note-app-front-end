import React, { Component } from "react";

export class AddNote extends Component {
  state = {
    title: ""
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addNote(this.state.title);
    this.setState({ title: "" });
    // afterwards need to set the code to indeed submit to database
  };
  onChange = e => this.setState({ title: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          style={{ flex: "10", padding: "5px" }}
          type="text"
          name="title"
          placeholder="Add Title"
          onChange={this.onChange}
          value={this.state.title}
        />
        <input
          type="submit"
          value="Add"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddNote;
