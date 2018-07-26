import React, { Component } from 'react'
import SearchBar from './SearchBar'


class Search extends Component {

  render() {
    return (
      <div>
        <div className="search-books">
          <SearchBar/>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
      </div>
    )
  }
}

export default Search