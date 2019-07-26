import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {


  function makeNoteItems() {
    // console.log(props.notes);
    return props.notes.map((note) => {
      // debugger
      return <NoteItem data={note} key={note.id} setCurrentNote={props.setCurrentNote} />
    })
  }

    return (
      <ul>
        {makeNoteItems()}
      </ul>
    )

}

export default NoteList;
