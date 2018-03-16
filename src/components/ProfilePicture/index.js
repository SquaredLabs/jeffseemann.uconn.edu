import React, { Component } from 'react'

import ProfilePictureItem from './ProfilePictureItem'

import './styles.css'

class ProfilePicture extends Component {
  render () {
    const { profiles } = this.props

    return <div className="profile-pictures-container">
      { profiles.map(profile => <ProfilePictureItem key={profile.name} profile={profile} />) }
    </div>
  }
}

export default ProfilePicture
