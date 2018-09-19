import React, { Component } from 'react'
import { colors } from '../../config'
import { apiFetch } from '../../utils'
import { apiUri } from '../../config'
import Header from '../Header'
import Collaborators from './Collaborators'
import Menu from '../Navigation/Menu'
import ErrorHandler from '../../hoc/ErrorHandler/errorHandler'
import './styles.css'

const gray = { color: colors.siteGray }
const black = { color: colors.siteBlack }
const green = { color: colors.siteGreen }

class Collaborate extends Component {
  state = {
    collaborators: [],
    sponsors: [],
    error: false
  }
  componentDidMount() {
    this.downloadData()
  }
  async downloadData() {
    try {
      const downloadedCollaborators = await apiFetch(apiUri.collaborators.pathname, apiUri.collaborators.query)
      const downloadedSponsors = await apiFetch(apiUri.sponsors.pathname, apiUri.sponsors.query)
      this.setState({
        sponsors: downloadedSponsors.data,
        collaborators: downloadedCollaborators.data
      })
    } catch (error) {
      this.setState({ error: true })
    }
  }
  render = () =>
    <ErrorHandler error={this.state.error}>
      <div className="collab-container">
        <Header page="Collaborate" />
        <div className="collab-welcome-banner">
          <div>
            <div className="collab-name" style={black}>Seemann</div>
            <div className="collab-name" style={black}>Lab</div>
          </div>
          <div className="collab-plus" style={gray}>+</div>
          <div className="Rectangle"></div>
        </div>
        <div className="collab-slogan-container">
          <div className="collab-slogan" style={gray}>Knowledge is infinite.</div>
          <div className="collab-slogan" style={green}>Let's share.</div>
        </div>
        <div className="collab-collab" style={gray}>Past + Present Collaborators</div>
        <Collaborators collaborators={this.state.collaborators} sponsors={this.state.sponsors} />
        <div className="collab-slogan-container">
          <div className="collab-slogan" style={gray}>Interested? Contact <a style={black} href="jeff.seeman@uconn.edu">Jeff</a>.</div>
        </div>
        <Menu />
      </div>
    </ErrorHandler>
}

export default Collaborate
