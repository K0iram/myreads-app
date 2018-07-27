import React from 'react'
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
      {authors.length > 1 ? (
          authors.map((author, i) => ( <div key={i} className="book-authors">{author}<br/></div>))
        ) : (
          <div className="book-authors">{authors[0]}</div>
        )
      }
  </div>
  )
}

export default Book