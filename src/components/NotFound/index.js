import React, { Component } from 'react'
import { withRouter } from 'react-router'

import { colors } from '../../config'
import Header from '../Header'
import Navigation from '../Navigation'

import './styles.css'

const gray = { color: colors.siteGray }
const black = { color: colors.siteBlack }
const lightgray = { color: colors.profileWhite }

class NotFound extends Component {
  componentWillMount () {
    document.body.classList.add('page-notfound')
  }

  componentWillUnmount () {
    document.body.classList.remove('page-notfound')
  }

  render = () =>
    <div className="notfound-container">
      <div className="notfound-left">
        <div className="notfound-header">
          <Header page="Lab" hideAlways={true}/>
        </div>
        <div className="notfound-404" style={black}>404</div>
        <div className="notfound-error">
          <div style={lightgray}>https://jeffseemann.uconn.edu/</div>
          <div style={gray}>{this.props.location.pathname.slice(1)}</div>
          <div style={black}>Error: page not found.</div>
        </div>
        <div className="notfound-right-mobile">
          <Navigation />
        </div>
      </div>
      <div className="notfound-right">
        <Navigation />
      </div>
    </div>
}

export default withRouter(NotFound)
