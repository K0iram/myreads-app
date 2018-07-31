import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import Book from './Book';


const Search = (props) => {
  const { searchResults, error, myBooks, onSearchBooks, update } = props;

  return (
    <div>
      <div className="search-books">
        <SearchBar onSearch={onSearchBooks}/>
        <div className="search-books-results">
        {searchResults.length > 0 &&
          <ol className="books-grid">
            {searchResults.map((book) =>
              <Book
                key={book.id}
                book={book}
                myBooks={myBooks}
                update={update}
              />
            )}
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
};

Search.propTypes = {
  update: PropTypes.func.isRequired,
  onSearchBooks: PropTypes.func,
  searchResults: PropTypes.array,
  myBooks: PropTypes.array,
  error: PropTypes.string
};

export default Search;