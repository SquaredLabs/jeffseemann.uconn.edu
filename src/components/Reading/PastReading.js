import React from 'react'
import { apiImageUrl } from '../../utils'
import { colors} from '../../config'

import './styles.css'

const blackStyle = { color: colors.siteBlack }

const pastReading = (props) => {

  const books = props.books.map((book) => {
    const uri = apiImageUrl(book.image.data.url)
    return <img className="past-reading-img" key={book.id}
      alt={book.title} src={uri}></img>
  })

  return <div className="past-reading-container">
    <div className="header" style={blackStyle}>Past Reading</div>
    <div>{books}</div>
  </div>
}


export default pastReading
