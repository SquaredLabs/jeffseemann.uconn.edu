import React, { Component } from 'react'
import { colors } from '../../config'

import './styles.css'

const gray = { color: colors.siteGray }
const black = { color: colors.siteBlack }

class Partner extends Component {
  render () {
    const { profile } = this.props

    return <div className="partner-container">
      <img className="partner-img" alt="icon" src="assets/img/Expand_Text.png"></img>
      <div>
        <div className="partner-title" style={black}>{profile.name}</div>
        <div className="partner-subtitle" style={gray}>
          {profile.company_name} &middot; {profile.topic_name}
        </div>
      </div>
    </div>
  }
}

export default Partner
