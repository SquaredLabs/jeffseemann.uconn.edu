import React, { Component } from 'react'
import { apiFetchGeneric, apiImageUrl } from '../../utils'
import { colors, apiUri } from '../../config'

import './styles.css'

const grayStyle = { color: colors.siteGray }
const blackStyle = { color: colors.siteBlack }

class NowReading extends Component {
  constructor (props) {
    super(props)

    this.state = {
      books: []
    }
  }

  componentDidMount () {
    this.nowReading()
  }

  async nowReading () {
    const response = await apiFetchGeneric(apiUri.nowReading.protocol,
      apiUri.nowReading.hostname, apiUri.nowReading.pathname, apiUri.nowReading.query)
    this.setState({ books: response.data })
  }

  render () {
    const books = this.state.books.map((book) => {
      const uri = apiImageUrl(apiUri.nowReading, book.image.data.url)
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
}

export default NowReading
