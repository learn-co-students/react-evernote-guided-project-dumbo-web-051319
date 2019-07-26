import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  render() {
    // debugger
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.props.notes}
            setCurrentNote={this.props.setCurrentNote}
          />
          <Content currentNote={this.props.currentNote}
            noteToBeEdited={this.props.noteToBeEdited}
            editNote={this.props.editNote}
            fetchEditNote={this.props.fetchEditNote}
            returnToViewer={this.props.returnToViewer}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
