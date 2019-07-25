import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {

  renderContent = () => {
    if (this.props) {
      if (this.props.noteToBeEdited === false) {
        return <NoteViewer
        currentNote={this.props.currentNote}
        editNote={this.props.editNote}
        />;
      } else if (this.props.noteToBeEdited === true) {
        return <NoteEditor currentNote={this.props.currentNote} fetchEditNote={this.props.fetchEditNote} />;
      } else {
        return <Instructions currentNote={this.props.currentNote}/>;
      }
    }
  }

  render() {
    console.log(this.props)    
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
