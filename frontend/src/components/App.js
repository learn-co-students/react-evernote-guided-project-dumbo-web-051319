import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

class App extends Component {

  state = {
    notes: [],
    currentNote: {},
    noteToBeEdited: null
  }

  editNote = (note) => {
    // debugger
    this.setState({
      noteToBeEdited: true
    })
  }

  setCurrentNote = (currentNote) => {
    // debugger
    this.setState({
      currentNote: currentNote,
      noteToBeEdited: false
    })
  }

  fetchEditNote = (id, note) => {
    // debugger
    let config = {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "id": id,
        "title": note.title,
        "body": note.body
      })
    }

    fetch(`/api/v1/notes/${id}`, config)

  }

  componentDidMount() {
    // debugger
    fetch('/api/v1/notes')
      .then((resp) => resp.json())
        .then((json) => this.setState({notes: json}))
  }

  render() {
    return (
      <div className="app">
        <Header />
        <NoteContainer
          notes={this.state.notes}
          currentNote={this.state.currentNote}
          noteToBeEdited={this.state.noteToBeEdited}
          setCurrentNote={this.setCurrentNote}
          editNote={this.editNote}
          fetchEditNote={this.fetchEditNote}
          />
      </div>
    );
  }

}

export default App;
