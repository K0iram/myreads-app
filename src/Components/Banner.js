import React from 'react';


const Banner = (props) => {
  const { book, myBooks } = props;

  // check if the book id is in my bookcase and if true return the shelf
  const shelfTitle = () => {
    if(myBooks.find((b) => b.id === book.id)){
     return myBooks.find((b) => b.id === book.id).shelf
    }
  };

  // check to see if the shelf given matches one of the 3 shelves and return the title
  const title = (shelf) => {
    if(shelf === 'currentlyReading') {
      return 'Currently Reading'
    } else if(shelf === 'wantToRead') {
      return 'Want To Read'
    } else if(shelf === 'read') {
      return 'Read'
    }
  };

    return (
      <div className="banner" id={shelfTitle()}>
        <span>{title(shelfTitle())}</span>
      </div>
    );
}

export default Banner;