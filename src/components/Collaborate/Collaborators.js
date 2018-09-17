import React, { Component } from 'react'
import { apiFetch, apiImageUrl } from '../../utils'
import { apiUri } from '../../config'

import Partner from './Partner'

import './styles.css'

class Collaborators extends Component {


    state = {
      collaborators: [],
      sponsors: []
    
  }

  componentDidMount () {
    this.getCollaborators()
    this.getSponsors()
  }

  async getCollaborators () {
    const response = await apiFetch(apiUri.collaborators.pathname, apiUri.collaborators.query)
    this.setState({ collaborators: response.data })
  }

  async getSponsors () {
    const response = await apiFetch(apiUri.sponsors.pathname, apiUri.sponsors.query)
    this.setState({ sponsors: response.data })
  }

  render () {
    const collaborators = this.state.collaborators.map((partner, i) =>
      <Partner key={i} profile={partner} />
    )
    const sponsors = this.state.sponsors.map((sponsor, i) => {
      const uri = apiImageUrl(sponsor.logo.data.url)
      return <img key={i} className="sponsor-img" alt={sponsor.name} src={uri} />
    })

    return <React.Fragment>
      <div className="collaborator-container">{collaborators}</div>
      <div className="sponsor-container">{sponsors}</div>
    </React.Fragment>
  }
}

export default Collaborators
