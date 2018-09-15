import React, { Component } from 'react'
import NoImage from '../icons/image-not-found.jpeg'


class BookInfo extends Component {
  componentDidMount() {
    console.log(this.props.bookInfo)
  }

  render() {
    const {bookInfo, myBooks} = this.props;
    const {title, authors, imageLinks, description} = bookInfo;
    const bookImg = !!imageLinks ? ( imageLinks.thumbnail ) : ( NoImage );

    return (
      <div>
        <h1>{title}</h1>
        <p>{authors}</p>
        <p>{description}</p>
        <img src={bookImg} alt={title}/>
      </div>
    );
  }
}

export default BookInfo