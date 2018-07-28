import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'


class Search extends Component {
  state = {
    results: []
  }

  searchBooks = (query) => {
    BooksAPI.search(query).then((res) => {
      this.setState({results: res})
    }).catch((err) => {
      console.error(err)
    })
  }

  render() {
    return (
      <div>
        <div className="search-books">
          <SearchBar onSearch={this.searchBooks}/>
        <div className="search-books-results">
        {!!this.state.results &&
          <ol className="books-grid">
            {this.state.results.map((book) => <Book key={book.id} book={book} />)}
          </ol>
        }
        </div>
      </div>
      </div>
    )
  }
}

export default Search