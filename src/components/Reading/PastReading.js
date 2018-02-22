import React, { Component } from 'react'
import { colors, pastReading } from '../../config'

import './styles.css'

const blackStyle = { color: colors.siteBlack }

class PastReading extends Component {
  render () {
    return <div className="past-reading-container">
      <div className="header" style={blackStyle}>Past Reading</div>
      { pastReading.map((book, index) =>
        <img className="past-reading-book" key={index}
          alt={book.title} src={book.path}></img>) }
    </div>
  }
}

export default PastReading
