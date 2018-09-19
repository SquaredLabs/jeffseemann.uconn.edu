import React, { Component } from 'react'
import { colors } from '../../config'

import './styles.css'

const gray = { color: colors.siteGray }
const black = { color: colors.siteBlack }

class Partner extends Component {
 

    state = { show: false }

    
  

    toggleShow () { this.setState({ show: !this.state.show }) }

    render () {
      const { profile } = this.props

      const showDescription = this.state.show
        ? <div className="partner-description" style={black}>{profile.description}</div>
        : <div></div>

      return <div className="partner-container">
        <div className="partner-title" style={black}>{profile.name}</div>
        <div onClick={() => this.toggleShow()}>
          <img className="partner-img" alt="icon"
            src={this.state.show ? 'assets/img/Collapse_Text.png' : 'assets/img/Expand_Text.png'}></img>
          <div className="partner-subtitle" style={gray}>
            {profile.company_name} &middot; {profile.topic_name}
          </div>
          {showDescription}
        </div>
      </div>
    }
}

export default Partner
