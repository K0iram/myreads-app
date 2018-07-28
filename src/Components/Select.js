import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from '../BooksAPI';


class Select extends Component {

  changeShelf = (e) => {
    const { book, update } = this.props;
    let shelf = e.target.value;

    BooksAPI.update(book, shelf).then(() => {
      update()
    }).catch((err) => {
      console.error(err)
    });
  };

  getSelected = () => {
    const { book, myBooks } = this.props;

    if(!!myBooks.find((b) => b.id === book.id)) {
      return myBooks.find((b) => b.id === book.id).shelf
    } else {
      return 'move'
    }
  };

  render() {
    const {book} = this.props;
    return (
      <div className="book-shelf-changer">
        <select defaultValue={book.shelf ? book.shelf : this.getSelected()} onChange={this.changeShelf}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  };
}

Select.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    shelf: PropTypes.string
  }),
  update: PropTypes.func,
  myBooks: PropTypes.array
};

export default Select;