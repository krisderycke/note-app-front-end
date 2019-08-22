import React, { Component } from "react";

export class AddNote extends Component {
  state = {
    title: "",
    note: ""
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addNote(this.state.title);
    this.setState({ title: "" });
    // afterwards need to set the code to indeed submit to database
  };
  onChange = e => this.setState({ title: e.target.value });
  // onChangeNote = e => this.this.setState({ note: e.target.value });

  render() {
    return (
      <form action="POST" onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          style={{ flex: "3", padding: "5px" }}
          type="text"
          name="title"
          placeholder="Add Title"
          onChange={this.onChange}
          value={this.state.title}
        />
        {/* <input
          style={{ flex: "3", padding: "5px" }}
          type="text"
          name="note"
          placeholder="Add Note"
          // onChange={this.onChangeNote}
          value={this.state.note} */}
        {/* /> */}
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
