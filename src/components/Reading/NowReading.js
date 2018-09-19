import React from 'react'
import { apiImageUrl } from '../../utils'
import { colors } from '../../config'

import './styles.css'

const grayStyle = { color: colors.siteGray }
const blackStyle = { color: colors.siteBlack }

const nowReading = (props) => {
  const books = props.books.map((book) => {
    const uri = apiImageUrl(book.image.data.url)
    return <div className="book" key={book.id}>
      <img className="now-reading-img" alt={book.title} src={uri}></img>
      <div className="right">
        <div className="title" style={blackStyle}>{book.title}</div>
        <div className="author-isbn" style={grayStyle}>
          <div>{book.author}</div>
          <div>ISBN {book.isbn}</div>
        </div>
        <div className="description" style={blackStyle}>{book.description}</div>
      </div>
    </div>
  })

  return <div>
    <div className="header" style={blackStyle}>Now Reading</div>
    <div className="books-wrapper">{books}</div>
  </div>
}

export default nowReading
