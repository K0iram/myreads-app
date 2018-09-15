import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import Book from './Book';
import SearchTerms from '../Utils/SearchTerms'

// pick a random number under a given max
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// collect 5 random elements from the serchterms arrays
const randomArray = (arr) => {
  let newArr = []
  for(let i = 0; i < 10; i++) {
    //get a random index number for 10 loops and push
    //the index into new array to get a randomized array
    //the length is 10 to account for possible duplicates
    let rand = getRandomInt(arr.length-1)
    newArr.push(arr[rand])
  };
  //make sure the values are unique and take the first 5
  let unique = [...new Set(newArr)].slice(0,5)
  return unique;
};

const Search = (props) => {
  const { searchResults, error, myBooks, onSearchBooks, update, onClear, getBook } = props;

  return (
    <div>
      <div className="search-books">
        <SearchBar onSearch={onSearchBooks} onClear={onClear}/>
        <div className="search-books-results">
        {!!searchResults.length &&
          <ol className="books-grid">
            {searchResults.map((book) =>
              <Book
                key={book.id}
                book={book}
                myBooks={myBooks}
                update={update}
                getBook={getBook}
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
                  {randomArray(SearchTerms).map((word, i) => (
                    <span key={i}>"{word}" </span>
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