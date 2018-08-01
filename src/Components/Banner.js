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
    const shelfTypes = {
      currentlyReading: 'Currently Reading',
      wantToRead: 'Want to Read',
      read: "Read"
    };
    return shelfTypes[shelf];
  };

    return (
      <div className="banner" id={shelfTitle()}>
        <span>{title(shelfTitle())}</span>
      </div>
    );
}

export default Banner;