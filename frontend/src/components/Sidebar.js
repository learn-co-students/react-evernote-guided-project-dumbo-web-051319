import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {

  render() {
    // debugger
    return (
      <div className='master-detail-element sidebar'>
        <NoteList notes={this.props.notes} setCurrentNote={this.props.setCurrentNote}/>
        <button onClick={this.props.fetchCreateNote}>New</button>
      </div>
    );
  }
}

export default Sidebar;
