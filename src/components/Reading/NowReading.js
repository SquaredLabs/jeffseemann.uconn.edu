import React, { Component } from 'react'
import { colors, nowReading } from '../../config'

import './styles.css'

const grayStyle = { color: colors.siteGray }
const blackStyle = { color: colors.siteBlack }

class NowReading extends Component {
  render () {
    const { title, author, isbn, description, path } = nowReading

    return <div className="now-reading-container">
      <div className="header" style={blackStyle}>Now Reading</div>
      <div className="book">
        <img alt={title} src={path}></img>
        <div className="right">
          <div className="title" style={blackStyle}>{title}</div>
          <div className="author-isbn" style={grayStyle}>
            <div>{author}</div>
            <div>ISBN {isbn}</div>
          </div>
          <div className="description" style={blackStyle}>{description}</div>
        </div>
      </div>
    </div>
  }
}

export default NowReading
