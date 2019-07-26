import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {

  console.log(props)

  function makeNoteItems() {
    console.log(props.query);
    // debugger
    let filtered =  props.notes.filter((note) => {
      return note.title.toLowerCase().includes(props.query.toLowerCase())
    })
    return filtered.map((note) => {
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
