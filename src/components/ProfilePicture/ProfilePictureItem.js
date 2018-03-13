import React, { Component } from 'react'
import { colors } from '../../config'

import './styles.css'

const nameStyle = { color: colors.siteGreen }
const bioStyle = { color: colors.profileWhite }

class ProfilePictureItem extends Component {
  render () {
    const { profile: { name, major, position, path } } = this.props

    return <div className="profile-container">
      <img className="profile-picture-image" alt={name} src={path}></img>
      <div className="overlay">
        <div className="bio">
          <div className="name" style={nameStyle}>{name}</div>
          <div className="dash" style={bioStyle}>-</div>
          <div className="major" style={bioStyle}>{major}</div>
          <div className="position" style={bioStyle}>{position}</div>
        </div>
      </div>
    </div>
  }
}

export default ProfilePictureItem
