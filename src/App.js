import React, { Component } from "react";
import Header from "./Components/LayOut/Header";
import Note from "./Components/Note";
import "./App.css";

class App extends Component {
  state = {
    notes: [
      // here comes data from my own API
      {
        id: 1,
        title: "title1",
        completed: false
      },
      {
        id: 2,
        title: "title2",
        completed: false
      },
      {
        id: 3,
        title: "title3",
        completed: false
      }
    ]
  };
  //toggle complete box
  markComplete = id => {
    this.setState({
      notes: this.state.notes.map(note => {
        if (note.id === id) {
          note.completed = !note.completed;
          //didnt use true/false but "!" so it is always the opposite of the current status of completed. otherwise it stays "completed"
        }
        return note;
      })
    });
  };
  //delNote
  delNote = id => {
    this.setState({
      notes: [...this.state.notes.filter(note => note.id !== id)]
    });
  };
  render() {
    // console.log(this.state.notes);
    return (
      <div className="App">
        <Header />
        <Note
          notes={this.state.notes}
          markComplete={this.markComplete}
          delNote={this.delNote}
        />
      </div>
    );
  }
}

export default App;
