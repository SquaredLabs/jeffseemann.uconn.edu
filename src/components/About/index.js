import React, { Component } from 'react'
import { apiFetch, apiImageUrl } from '../../utils'
import { apiUri, colors } from '../../config'
import ErrorHandler from '../../hoc/ErrorHandler/errorHandler'
import Header from '../Header'
import Navigation from '../Navigation'
import Menu from '../Navigation/Menu'
import './styles.css'

const gray = { color: colors.siteGray }
const black = { color: colors.siteBlack }

class About extends Component {
  state = {
    image: '',
    description: '',
    contact: '',
    error: false
  }

  componentDidMount () {
    this.getAboutContent()
  }

  async getAboutContent () {
    let response = null
    try {
      response = await apiFetch(apiUri.about.pathname)
    } catch (error) {
      this.setState({ error: true })
      return
    }
    if (response && response.data.length > 0) {
      this.setState({
        image: response.data[0].image.data.url,
        description: response.data[0].description,
        contact: response.data[0].contact_description
      })
    }
  }

  render () {
    const imageUrl = apiImageUrl(this.state.image)
    const description = { __html: this.state.description }
    const contact = { __html: this.state.contact }

    return (
      <ErrorHandler error={this.state.error}>
        <div className="about-container">
          <div className="about-left">
            <Header page="About" hideWithNav={true} />
            <div className="about-wrapper">
              <img className="about-img" alt="" src={imageUrl}></img>
              <div className="about-desc" style={black} dangerouslySetInnerHTML={description}></div>
              <div className="about-contact" style={gray} dangerouslySetInnerHTML={contact}></div>
            </div>
          </div>
          <div className="about-right">
            <Navigation />
          </div>
          <div className="about-menu">
            <Menu />
          </div>
        </div>
      </ErrorHandler>
    )
  }
}

export default About
