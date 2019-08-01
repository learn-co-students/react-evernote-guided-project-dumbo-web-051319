import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

class App extends Component {

  state = {
    notes: [],
    currentNote: {},
    noteToBeEdited: null,
    query: "",
    sortTerm: ""
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

  fetchEditNote = (id, note) => {
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

  handleFilterChange = (term) => {
    this.setState({sortTerm: term})
  }

  sortedNotes = () => {
    // let sorted = []
    if(this.state.sortTerm === "date") {
      // alert("This API does not render dates")
      return this.state.notes.sort((a, b) => {
        return new Date(b.created_at.slice(0,10)) - new Date(a.created_at.slice(0,10))
      }
    )
    // debugger

      } else {
      return this.state.notes.sort((a, b) => {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase())
      })
    }
  }

  render() {
    return (
      <div className="app">
        <Header />
        <NoteContainer
          notes={this.sortedNotes()}
          currentNote={this.state.currentNote}
          noteToBeEdited={this.state.noteToBeEdited}
          setCurrentNote={this.setCurrentNote}
          editNote={this.editNote}
          fetchEditNote={this.fetchEditNote}
          returnToViewer={this.returnToViewer}
          fetchCreateNote={this.fetchCreateNote}
          search={this.search}
          query={this.state.query}
          sortTerm={this.state.sortTerm}
          handleChange={this.handleFilterChange}
          />
      </div>
    )
  }

}

export default App;
