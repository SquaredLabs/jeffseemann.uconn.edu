import React, { Component } from 'react'
import { apiFetch, apiImageUrl} from '../../utils'
import { apiUri, colors } from '../../config'

import Navigation from '../Navigation'
import Menu from '../Navigation/Menu'
import ProfilePicture from '../ProfilePicture'
import ProfilePictureItem from '../ProfilePicture/ProfilePictureItem'
import {Link} from 'react-router-dom';
import './styles.css'

const white = { color: colors.profileWhite }
const green = { color: colors.siteGreen }
const gray = { color: colors.siteGray }
const black = { color: colors.siteBlack }
const backgroundBlack = { background: colors.siteBlack }

class Lab extends Component {
 

    state = {
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
      },
      menu: 'lab-show-menu'
    }
 

  componentDidMount () {
    this.generateProfilePictures()
    this.labContent()
    window.addEventListener('scroll', this.handleScroll())
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll())
  }

  handleScroll () {
    // Perform a boolean XOR operation to only display menu in 2nd and 3rd quadrants - spaghetti!
    const a = window.innerHeight - window.scrollY < 0
    const b = document.documentElement.offsetHeight - window.scrollY <= 2 * window.innerHeight
    const className = (a || b) && !(a && b) ? '' : 'lab-show-menu'
    this.setState({ menu: className })
  }

  async generateProfilePictures () {
    var i = 0
    var j = 2
    var rows = []
    const response = await apiFetch(apiUri.labProfiles.pathname, apiUri.labProfiles.query)

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
    const response = await apiFetch(apiUri.labContent.pathname)
    if (response && response.data) this.setState({ content: response.data[0] })
  }

  render () {
    const uriImageLeft = apiImageUrl(this.state.content.first_image.data.url)
    const uriImageCenter = apiImageUrl(this.state.content.second_image.data.url)
    const uriImageRight = apiImageUrl(this.state.content.third_image.data.url)
    const landingDescription = {__html: this.state.content.landing_description}
    const labDescription = {__html: this.state.content.lab_description}
    const labBottomDescription = {__html: this.state.content.lab_bottom_description}
    const collapseHeader =
      <div className="lab-header-name" style={gray}>
        Seemann
        <span style={green}> Lab</span>
      </div>
    return <div className="lab-container">
      <div className="first-container">
        <div className="left-half">
          <div className="lab-header-container">
            <img className="uconn-logo-lab" alt="uconn-logo" src="assets/img/uconn-wordmark-single-black.png"></img>
            {collapseHeader}
          </div>
          <div className="half-1st-text">
            <div style={black} className="landing-description" dangerouslySetInnerHTML={landingDescription}></div>
          </div>
        </div>
        <div className="right-half">
          <Navigation />
        </div>
      </div>

      <div className="second-container">
       <Link to={'about'}> {this.state.members}  </Link>
      </div>

      <div style={backgroundBlack} className="third-container">
        <div className="third-container-wrapper">
          <div className="lab-first-container">
            <div style={white} className="lab-description" dangerouslySetInnerHTML={labDescription}></div>
            <div className="left-image-spacing">
              <ProfilePictureItem title={this.state.content.first_image_title} desc={this.state.content.first_image_description} url={uriImageLeft} />
            </div>
          </div>
          <div className="lab-second-container">
            <div className="center-image-spacing">
              <ProfilePictureItem title={this.state.content.second_image_title} desc={this.state.content.second_image_description} url={uriImageCenter} />
            </div>
          </div>
          <div className="lab-third-container">
            <div className="right-image-spacing">
              <ProfilePictureItem title={this.state.content.third_image_title} desc={this.state.content.third_image_description} url={uriImageRight} />
            </div>
          </div>
        </div>
      </div>

      <div className="fourth-container">
      <div style={gray} className="left-half">
      <div className="lab-header-container-fourth">
            {collapseHeader}
          </div>
          <div className="bottom-description" dangerouslySetInnerHTML={labBottomDescription}></div>
        </div>
        <div className="right-half">
          <Navigation />
        </div>
      </div>
      <div className={this.state.menu}>
        <Menu />
      </div>
    </div>
  }
}

export default Lab
