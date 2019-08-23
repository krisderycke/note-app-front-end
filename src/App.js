import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/LayOut/Header";
import Note from "./Components/Note";
import AddNote from "./Components/AddNote";

import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    notes: []
    // here comes data from my own API
  };
  async componentDidMount() {
    await axios
      .get("http://localhost/phpfiles/becode-database-api/select.php")
      .then(res => this.setState({ notes: res.data }));
  }
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
    axios
      .delete(`http://localhost/phpfiles/becode-database-api/delete.php/${id}`)
      .then(res =>
        this.setState({
          notes: [...this.state.notes.filter(note => note.id !== id)]
        })
      );
  };

  //add Note
  addNote = title => {
    axios
      .post("http://localhost/phpfiles/becode-database-api/insert.php", {
        title,
        completed: false
      })
      .then(res => this.setState({ notes: [...this.state.notes, res.data] }));
  };

  render() {
    // console.log(this.state.notes);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddNote addNote={this.addNote} />
                  <Note
                    notes={this.state.notes}
                    markComplete={this.markComplete}
                    delNote={this.delNote}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/note-app-front-end" component={Note} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
