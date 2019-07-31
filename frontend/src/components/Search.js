import React from 'react';

class Search extends React.Component {

  render() {
    return (
      <div className="filter">
      <input
        name="query"
        value={this.props.query}
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
