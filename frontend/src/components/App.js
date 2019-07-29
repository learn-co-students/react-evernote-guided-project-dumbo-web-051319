import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

class App extends Component {

  state = {
    notes: [],
    currentNote: {},
    noteToBeEdited: null,
    query: ""
  }

  updateCurrentNoteState = (e) => {
    if(e.target.name === "body") {
      this.setState({currentNote: {
        body: e.target.value,
        title: this.state.currentNote.title,
        id: this.state.currentNote.id,
      }})
    } else if (e.target.name === "title") {
      this.setState({currentNote: {
        title: e.target.value,
        body: this.state.currentNote.body,
        id: this.state.currentNote.id,
      }})
    }



  }

  returnToViewer = () => {
    this.setState({noteToBeEdited: false})
  }

  editNote = (note) => {
    // debugger
    this.setState({
      noteToBeEdited: true
    })
  }

  setCurrentNote = (currentNote) => {
    this.setState({
      currentNote: currentNote,
      noteToBeEdited: false
    })
  }

  fetchEditNote = () => {
    let config = {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "id": this.state.currentNote.id,
        "title": this.state.currentNote.title,
        "body": this.state.currentNote.body
      })
    }
    fetch(`/api/v1/notes/${this.state.currentNote.id}`, config)
      .then((resp) => resp.json())
        .then((json) => this.updateStateWithEdit(json))
  }

  updateStateWithEdit = (json) => {
    let newNotes = this.state.notes.map((note) => {
      if(note.id === json.id) {
        return json
      } else {
        return note
      }
    })
    this.setState({
      notes: newNotes,
      currentNote: json,
      noteToBeEdited: false
    })
  }

  fetchCreateNote = () => {
    // debugger
    let config = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        title: "default",
        body: "placeholder",
      })}
    fetch('/api/v1/notes', config)
      .then(() => this.getAllNotes())
  }

  getAllNotes = () => {
    fetch('/api/v1/notes')
      .then((resp) => resp.json())
      .then((json) => this.setState({notes: json}))
  }

  search = (e) => {
    // debugger
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount() {
    this.getAllNotes()
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
          returnToViewer={this.returnToViewer}
          fetchCreateNote={this.fetchCreateNote}
          search={this.search}
          query={this.state.query}
          updateCurrentNote={this.updateCurrentNoteState}
          />
      </div>
    )
  }

}

export default App;
