import React, { Component } from 'react'
import { apiFetch, apiImageUrl } from '../../utils'
import { apiUri, colors } from '../../config'

import Header from '../Header'
import Navigation from '../Navigation'

import './styles.css'

const gray = { color: colors.siteGray }
const black = { color: colors.siteBlack }

class About extends Component {
  constructor (props) {
    super(props)

    this.state = {
      image: '',
      description: '',
      contact: ''
    }
  }

  componentDidMount () {
    this.getAboutContent()
  }

  async getAboutContent () {
    const response = await apiFetch(apiUri.about.pathname)
    if (response && response.data.length > 0) {
      this.setState({ image: response.data[0].image.data.url })
      this.setState({ description: response.data[0].description })
      this.setState({ contact: response.data[0].contact_description })
    }
  }

  render () {
    const imageUrl = apiImageUrl(this.state.image)
    const description = {__html: this.state.description}
    const contact = {__html: this.state.contact}

    return <div className="about-container">
      <div className="about-left">
        <Header />
        <div className="about-wrapper">
          <img className="about-img" alt="" src={imageUrl}></img>
          <div className="about-desc" style={black} dangerouslySetInnerHTML={description}></div>
          <div className="about-contact" style={gray} dangerouslySetInnerHTML={contact}></div>
        </div>
      </div>
      <div className="about-right">
        <Navigation />
      </div>
    </div>
  }
}

export default About
