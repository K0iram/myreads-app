import React from 'react';
import PropTypes from 'prop-types';
import Banner from './Banner';
import Select from './Select';


const Book = (props) => {
  const { book, update, results, myBooks, getSelected } = props;
  const { imageLinks, title, authors, id } = book;
  const { smallThumbnail } = imageLinks;


  return (
    <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${smallThumbnail})`}}>
      {myBooks &&
        <Banner book={book} myBooks={myBooks}/>
      }
      </div>
      <Select book={book} id={id} update={update} results={results} myBooks={myBooks} getSelected={getSelected}/>
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
  results: PropTypes.array,
  myBooks: PropTypes.array
};


export default Book;