import React, { Component } from 'react'
import { colors } from '../../config'

import './styles.css'

const gray = { color: colors.siteGray }
const black = { color: colors.siteBlack }

class Position extends Component {
  render () {
    const { position } = this.props

    return <div className="position-container">
      <div className="position-title" style={black}>{position.name}</div>
      <div className="position-subtitle" style={gray}>
        {position.hours} HRS/WK &middot; {position.wage}
      </div>
      <div className="position-desc" style={black}>{position.description}</div>
      <br />
      <a className="position-apply" style={black} href={position.link} target="_blank" rel="noopener noreferrer">Apply Now</a>
    </div>
  }
}

export default Position
