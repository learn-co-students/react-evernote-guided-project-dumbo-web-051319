import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';
import Sorter from './Sorter';

class NoteContainer extends Component {
  render() {
    // debugger
    return (
      <Fragment>
        <Sorter sortTerm={this.props.sortTerm} handleChange={this.props.handleChange}/>
        <Search search={this.props.search} />
        <div className='container'>
          <Sidebar notes={this.props.notes}
            setCurrentNote={this.props.setCurrentNote}
            fetchCreateNote={this.props.fetchCreateNote}
            query={this.props.query}
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
