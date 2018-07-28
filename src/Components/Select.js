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

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.props.book.shelf} onChange={this.changeShelf}>
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