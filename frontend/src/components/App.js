import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

class App extends Component {

  state = {
    notes: [],
    currentNote: {}
  }

  setCurrentNote = (currentNote) => {
    // debugger
    this.setState({currentNote: currentNote})
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
          setCurrentNote={this.setCurrentNote} />
      </div>
    );
  }

}

export default App;
