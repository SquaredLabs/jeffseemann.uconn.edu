import React from 'react'
import {  apiImageUrl } from '../../utils'
import Partner from './Partner'

import './styles.css'

const Collaborators = (props) => {
  const collaborators = props.collaborators.map((partner, i) =>
    <Partner key={i} profile={partner} />
  )
  const sponsors = props.sponsors.map((sponsor, i) => {
    const uri = apiImageUrl(sponsor.logo.data.url)
    return <img key={i} className="sponsor-img" alt={sponsor.name} src={uri} />
  })

  return (
    <React.Fragment>
      <div className="collaborator-container">{collaborators}</div>
      <div className="sponsor-container">{sponsors}</div>
    </React.Fragment>
  )
}

export default Collaborators
