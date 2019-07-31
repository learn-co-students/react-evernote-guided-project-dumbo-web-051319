import React from 'react';

class Sorter extends React.Component {
  render() {
    return (
      <div>
        <input type="radio" value="name" checked={this.props.sortTerm === "name"} onChange={(e) => this.props.handleChange(e.target.value)}/>
        <label>Sort by name:</label>
        <br/><br/><br/>
        <input type="radio" value="date" checked={this.props.sortTerm === "date"} onChange={(e) => this.props.handleChange(e.target.value)}/>
        <label>Sort by date:</label>
      </div>
    )
  }

}

export default Sorter;
