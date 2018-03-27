import React, { Component } from 'react'
import { colors, apiUri } from '../../config'
import { apiImageUrl } from '../../utils'

import './styles.css'

const nameStyle = { color: colors.siteGreen }
const bioStyle = { color: colors.profileWhite }

class ProfilePictureItem extends Component {
  render () {
    const { profile, title, desc, url } = this.props
    const header = this.props.profile ? profile.name : title
    const subheader = this.props.profile ? profile.major : desc
    const body = this.props.profile ? profile.position : null
    const uri = url || apiImageUrl(profile.image.data.url)

    return <div className="profile-container">
      <img className={profile ? 'profile-picture-image' : 'lab-about-img'} alt={uri} src={uri}></img>
      <div className="overlay">
        <div className={profile ? 'bio' : 'bio-alt'}>
          <div className="name" style={nameStyle}>{header}</div>
          <div className="dash" style={bioStyle}>-</div>
          <div className={profile ? 'major' : 'subheader'} style={bioStyle}>{subheader}</div>
          <div className="position" style={bioStyle}>{body}</div>
        </div>
      </div>
    </div>
  }
}

export default ProfilePictureItem
