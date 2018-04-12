import React, { Component } from 'react'
import { colors } from '../../config'

import Publication from './Publication'

import './styles.css'

const black = { color: colors.siteBlack }

class PublicationTile extends Component {
  render () {
    const { year, publications } = this.props

    const Publications = publications.map((publication, i) =>
      <Publication publication={publication} key={i}/>)

    return <div className="publicationtile-container">
      <div className="publicationtile-year" style={black}>{year}</div>
      <div className="publicationtile-wrapper">
        {Publications}
      </div>
    </div>
  }
}

export default PublicationTile
