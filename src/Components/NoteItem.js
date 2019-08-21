import React, { Component } from "react";
import PropTypes from "prop-types";

export class NoteItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.note.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.note;
    // this way we an use the variable "id" and "title" instead of using "this.props.note"
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {/* {this.props.note.title} commented out the original syntax (see line 16)*/}
          {title}
          <button onClick={this.props.delNote.bind(this, id)} style={btnStyle}>
            Delete
          </button>
          {this.props.note.ID}
          {"  "}
          {this.props.note.Title}
        </p>
      </div>
    );
  }
}
//proptypes
NoteItem.propTypes = {
  note: PropTypes.object.isRequired
};

const btnStyle = {
  background: "#ff0030",
  color: "white",
  border: "none",
  padding: "5px 8px",
  borderRadius: "5px",
  cursor: "pointer",
  float: "right"
};
export default NoteItem;
