import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Banner from './Banner';
import Select from './Select';
import NoImage from '../icons/image-not-found.jpeg'


const Book = (props) => {
  const { book, update, results, myBooks, getSelected, getBook } = props;
  const { imageLinks, title, authors, id } = book;

  const bookImg = !!imageLinks ? ( imageLinks.thumbnail ) : ( NoImage );

  return (
    <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: `url(${bookImg})`
        }}>
        {myBooks &&
          <Banner book={book} myBooks={myBooks}/>
        }
      </div>
      <Select book={book} id={id} update={update} results={results} myBooks={myBooks} getSelected={getSelected}/>
      <Link to='/book' onClick={() => getBook(id)}>Click Me</Link>
    </div>
    <div className="book-title">{title}</div>
      {authors &&
        authors.length > 1 ? (
          authors.map((author, i) => ( <div key={i} className="book-authors">{author}<br/></div>))
        ) : (
          <div className="book-authors">{authors}</div>
        )
      }
    </div>
  )
};

Book.propTypes = {
  book: PropTypes.shape({
      id: PropTypes.string,
      authors: PropTypes.array,
      title: PropTypes.string,
      imageLinks: PropTypes.object
    }).isRequired,
  update: PropTypes.func.isRequired,
  getSelected: PropTypes.func,
  getBook: PropTypes.func,
  results: PropTypes.array,
  myBooks: PropTypes.array
};


export default Book;