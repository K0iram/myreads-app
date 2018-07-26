import React, { Component } from 'react'
import Select from './Select'


const Book = ({book}) => {
  const {bookURL, name, author} = book

  return (
    <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookURL})`}}></div>
      <Select/>
    </div>
    <div className="book-title">{name}</div>
    <div className="book-authors">{author}</div>
  </div>
  )
}

export default Book