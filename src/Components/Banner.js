import React from 'react';


const Banner = (props) => {
  const { book, myBooks } = props;

  const title = (shelf) => {
    if(shelf === 'currentlyReading') {
      return 'Currently Reading'
    } else if(shelf === 'wantToRead') {
      return 'Want To Read'
    } else if(shelf === 'read') {
      return 'Read'
    }
  };

  const shelfTitle = () => {
    if(myBooks.find((b) => b.id === book.id)){
     return myBooks.find((b) => b.id === book.id).shelf
    }
  };

    return (
      <div className="banner" id={shelfTitle()}>
        <span>{title(shelfTitle())}</span>
      </div>
    );
}

export default Banner;