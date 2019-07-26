import React, { Component } from 'react';

class NoteEditor extends Component {

  // id: this.props.currentNote.id,

  title = this.props.currentNote.title
  body = this.props.currentNote.body

  state = {
      title: this.title,
      body: this.body
  }


  updateState = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.props);
    // console.log(this.state);
    // console.log(this.props.fetchEditNote);
    this.props.fetchEditNote(this.props.currentNote.id, this.state)
  }

  render() {
    console.log(this.props)
    return (
      <form className="note-editor" onSubmit={this.handleSubmit}>
        <input onChange={this.updateState} type="text" name="title" placeholder={this.props.currentNote.title} value={this.state.title} />
        <textarea onChange={this.updateState} name="body" placeholder={this.props.currentNote.body} value={this.state.body} >
          {this.props.currentNote.body}
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
