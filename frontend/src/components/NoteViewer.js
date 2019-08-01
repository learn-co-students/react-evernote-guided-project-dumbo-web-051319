import React, { Fragment } from 'react';

const NoteViewer = (props) => {

  function handleEdit(e) {
    // debugger
    props.editNote(props.currentNote)
  }

  // debugger

  return (
    <Fragment>
      <h2>{props.currentNote.title}</h2>
      <p>{props.currentNote.body}</p>
      <button onClick={handleEdit}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
