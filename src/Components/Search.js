import React from 'react'
import SearchBar from './SearchBar'
import Book from './Book'


const Search = (props) => {
  const { results, error, myBooks, onSearchBooks, update } = props
  return (
    <div>
      <div className="search-books">
        <SearchBar onSearch={onSearchBooks}/>
      <div className="search-books-results">
      {results.length > 0 &&
        <ol className="books-grid">
          {results.map((book) => <Book key={book.id} book={book} myBooks={myBooks} update={update} />)}
        </ol>
      }
      {error !== '' &&
        <div className="error-message">
          <h1>{error}</h1>
        </div>
      }
      </div>
    </div>
    </div>
  )
}

export default Search