import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'


const Home = (props) =>{
  const { results, update } = props
  const { booksReading, booksRead, booksWaiting } = results
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
                      <Book book={book} update={update}/>
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
                      <Book book={book} update={update}/>
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
                      <Book book={book} update={update}/>
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

export default Home