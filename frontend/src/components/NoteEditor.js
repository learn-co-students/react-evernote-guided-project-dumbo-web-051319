import React, { Component } from 'react';

class NoteEditor extends Component {


  handleSubmit = (e) => {
    e.preventDefault()
    this.props.fetchEditNote()
  }

  render() {
    console.log(this.props)
    return (
      <form className="note-editor" onSubmit={this.handleSubmit}>
        <input onChange={(e) => this.props.updateCurrentNote(e)}
          type="text" name="title"
          value={this.props.currentNote.title} />
        <textarea onChange={(e) => this.props.updateCurrentNote(e)}
          name="body"
          value={this.props.currentNote.body} >
        </ textarea>
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={this.props.returnToViewer} >Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
