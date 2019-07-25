import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

class App extends Component {

  state = {
    notes: []
  }

  componentDidMount() {
    // debugger
    fetch('/api/v1/notes')
      .then((resp) => resp.json())
        .then((json) => this.setState({notes: json}))
        // .then((json) => console.log(jso))
  }

  render() {
    return (
      <div className="app">
        <Header />
        <NoteContainer />
      </div>
    );
  }

}

export default App;
