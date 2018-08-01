import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';


const Home = (props) => {
  const { results, update } = props;
  const { booksReading, booksRead, booksWaiting } = results;

  const shelves = [ booksReading, booksWaiting, booksRead ];
  const shelfTitles = ['Currently Reading', 'Want To Read', 'Read'];

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelfTitles.map((shelf, i) => (
            <BookShelf key={i} books={shelves[i]} update={update} title={shelf}/>
          ))}
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    </div>
  )
};

Home.propTypes = {
  results: PropTypes.shape({
    booksReading: PropTypes.array,
    booksRead: PropTypes.array,
    booksWaiting: PropTypes.array
  }).isRequired,
  update: PropTypes.func.isRequired
};

export default Home;