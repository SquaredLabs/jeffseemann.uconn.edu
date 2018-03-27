import React, { Component } from 'react'
import { apiFetchGeneric, apiImageUrl } from '../../utils'
import { apiUri, colors } from '../../config'

import Navigation from '../Navigation'
import ProfilePicture from '../ProfilePicture'
import ProfilePictureItem from '../ProfilePicture/ProfilePictureItem'

import './styles.css'

const white = { color: colors.profileWhite }
const gray = { color: colors.siteGray }
const black = { color: colors.siteBlack }
const backgroundBlack = { background: colors.siteBlack }

class Lab extends Component {
  constructor (props) {
    super(props)

    this.state = {
      // list of profile picture components
      members: [],
      // TODO: replace prototye w/ check if(!this.state.content) <loading icon>
      content: {
        id: '',
        landing_description: '',
        lab_description: '',
        first_image_title: '',
        second_image_title: '',
        third_image_title: '',
        first_image_description: '',
        second_image_description: '',
        third_image_description: '',
        first_image: { data: { url: '' } },
        second_image: { data: { url: '' } },
        third_image: { data: { url: '' } },
        lab_bottom_description: ''
      }
    }
  }

  componentDidMount () {
    this.generateProfilePictures()
    this.labContent()
  }

  async generateProfilePictures () {
    var i = 0
    var j = 2
    var rows = []
    const response = await apiFetchGeneric(apiUri.labProfiles.protocol,
      apiUri.labProfiles.hostname, apiUri.labProfiles.pathname, apiUri.labProfiles.query)

    // alternate number of profiles per line 2 => 3 => 2 => ...
    while (i < response.data.length) {
      rows.push(<ProfilePicture profiles={response.data.slice(i, j)} />)
      if ((i + j) % 2 === 0) {
        i = j
        j += 3
      } else {
        i = j
        j += 2
      }
    }
    this.setState({ members: rows })
  }

  async labContent () {
    const response = await apiFetchGeneric(apiUri.labContent.protocol,
      apiUri.labContent.hostname, apiUri.labContent.pathname)
    if (response && response.data) this.setState({ content: response.data[0] })
  }

  render () {
    const uriImageLeft = apiImageUrl(this.state.content.first_image.data.url)
    const uriImageCenter = apiImageUrl(this.state.content.second_image.data.url)
    const uriImageRight = apiImageUrl(this.state.content.third_image.data.url)

    return <div className="lab-container">
      <div className="first-container">
        <div className="half">
          <img className="uconn-logo-lab" alt="uconn-logo" src="assets/img/uconn-wordmark-single-black.png"></img>
          <div className="half-1st-text">
            <div style={black} className="landing-description">{this.state.content.landing_description}</div>
          </div>
        </div>
        <div className="half">
          <Navigation />
        </div>
      </div>

      <div className="second-container">
        {this.state.members}
      </div>

      <div style={backgroundBlack} className="third-container">
        <div className="third">
          <div style={white} className="lab-description">{this.state.content.lab_description}</div>
          <ProfilePictureItem title={this.state.content.first_image_title} desc={this.state.content.first_image_description} url={uriImageLeft} />
        </div>
        <div className="third">
          <div className="center-image-spacing">
            <ProfilePictureItem title={this.state.content.second_image_title} desc={this.state.content.second_image_description} url={uriImageCenter} />
          </div>
        </div>
        <div className="third">
          <div className="right-image-spacing">
            <ProfilePictureItem title={this.state.content.third_image_title} desc={this.state.content.third_image_description} url={uriImageRight} />
          </div>
        </div>
      </div>

      <div className="fourth-container">
        <div style={gray} className="half">
          <div className="bottom-description">{this.state.content.lab_bottom_description}</div>
        </div>
        <div className="half">
          <Navigation />
        </div>
      </div>
    </div>
  }
}

export default Lab
