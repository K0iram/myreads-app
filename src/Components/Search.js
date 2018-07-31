import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import Book from './Book';
import SearchTerms from '../Utils/SearchTerms'

// pick a random number under a given max
const getRandomInt = (max) => {
return Math.floor(Math.random() * Math.floor(max));
}

// collect 5 random elements from the serchterms arrays
const randomArray = (arr) => {
  let newArr = []
  for(let i = 0; i < 5; i++) {
    let rand = getRandomInt(arr.length-1)
    newArr.push(arr[rand])
  }
  return newArr
}

const Search = (props) => {
  const { searchResults, error, myBooks, onSearchBooks, update } = props;


  return (
    <div>
      <div className="search-books">
        <SearchBar onSearch={onSearchBooks}/>
        <div className="search-books-results">
        {!!searchResults.length &&
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
          <div>
            <div className="error-message">
              <div className="error-message__inner">
                <h1>{error}</h1>
                <h2>Try some of these recommended terms<br/>
                  {randomArray(SearchTerms).map((word) => (
                    <span>"{word}" </span>
                  ))}
                </h2>
              </div>
            </div>
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