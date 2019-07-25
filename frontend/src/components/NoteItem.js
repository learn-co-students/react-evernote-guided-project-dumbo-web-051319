import React from 'react';

const NoteList = (props) => {

  // debugger
  return (
    <li>
    <h2>{props.data.title}</h2>
    <p>{props.data.body.split("").slice(0, 18)}...</p>
    </li>
  )
}

export default NoteList;
