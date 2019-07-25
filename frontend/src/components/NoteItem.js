import React from 'react';

class NoteList extends React.Component {

  handleClick = (e) => {
    // console.log(this.props);
    this.props.setCurrentNote(this.props.data)
  }

  render() {
    // debugger
    return (
      <li onClick={this.handleClick}>
      <h2>{this.props.data.title}</h2>
      <p>{this.props.data.body.split("").slice(0, 18)}...</p>
      </li>
    )
  }
}

export default NoteList;
