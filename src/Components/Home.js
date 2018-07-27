import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'


class Home extends Component {
  componentDidMount() {
    this.getAllBooks()
  }

  state = {
    booksReading: [],
    booksRead: [],
    booksWaiting: []
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((res) => {
      let currentlyReading = res.filter(book => book.shelf === 'currentlyReading')
      let read = res.filter(book => book.shelf === 'read');
      let wantToRead = res.filter(book => book.shelf === 'wantToRead')
      this.setState({
        booksReading: currentlyReading,
        booksRead: read,
        booksWaiting: wantToRead
      })
    })
  }

  render() {
    const { booksReading, booksRead, booksWaiting } = this.state
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {booksReading.map((book) => (
                      <li key={book.id}>
                        <Book book={book}/>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {booksWaiting.map((book) => (
                      <li key={book.id}>
                        <Book book={book}/>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {booksRead.map((book) => (
                      <li key={book.id}>
                        <Book book={book}/>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home