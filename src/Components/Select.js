import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'


class Select extends Component {

  changeShelf = (e) => {
    let book = this.props.book
    let shelf = e.target.value
    BooksAPI.update(book, shelf).then(() => {
      this.props.update()
    })
  }

  getSelected = () => {
    if( !!this.props.myBooks.find((b) => b.id === this.props.book.id)) {
      return this.props.myBooks.find((b) => b.id === this.props.book.id).shelf
    } else {
      return 'move'
    }
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select defaultValue={this.props.book.shelf ? this.props.book.shelf : this.getSelected()} onChange={this.changeShelf}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default Select