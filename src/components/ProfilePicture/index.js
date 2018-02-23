import React, { Component } from 'react'

import ProfilePictureItem from './ProfilePictureItem'

import './styles.css'

class ProfilePicture extends Component {
  render () {
    const { profiles } = this.props

    // TODO: Alternate 2/3 display
    return <div className="profile-pictures-container">
      { profiles.map((profile, i) => <ProfilePictureItem key={i} profile={profile} />) }
    </div>
  }
}

export default ProfilePicture
