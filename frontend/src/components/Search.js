import React from 'react';

class Search extends React.Component {

  state = {query: ""}

  // handleChange = (e) => {
  //   // debugger
  //   this.props.search(this.state.query)
  // }

  render() {
    return (
      <div className="filter">
      <input
      name="query"
      value={this.state.value}
      onChange={this.props.search}
      id="search-bar"
      type="text"
      placeholder="Search Notes"
      />
      </div>
    );

  }
}

export default Search;
