import React, { Component } from 'react'
import Select from './Select'


const Book = ({book}) => {
  const { imageLinks, title, authors } = book
  const { smallThumbnail } = imageLinks

  return (
    <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${smallThumbnail})`}}></div>
      <Select/>
    </div>
    <div className="book-title">{title}</div>
    <div className="book-authors">{authors[0]}</div>
  </div>
  )
}

export default Book