import React, { Component } from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

class Note extends Component {
  render() {
    // console.log(this.props.notes);
    return this.props.notes.map(note => (
      <NoteItem
        key={note.id}
        note={note}
        markComplete={this.props.markComplete}
        delNote={this.props.delNote}
      />
    ));
  }
}

//proptypes
Note.propTypes = {
  notes: PropTypes.array.isRequired
};
export default Note;
