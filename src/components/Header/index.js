import React, { Component } from 'react'
import { colors } from '../../config'

import './styles.css'

const gray = { color: colors.siteGray }
const green = { color: colors.siteGreen }

class Header extends Component {
  render () {
    const { page, hideWithNav, hideAlways } = this.props

    const classType = hideWithNav ? 'header-name-hidden' : 'header-name'
    const hideClass = hideAlways ? classType + ' header-hidden' : classType

    return <div className="header-container">
      <img className="uconn-logo" alt="uconn-logo" src="assets/img/uconn-wordmark-single-black.png"></img>
      <div className="header-wrapper">
        <h1 className="header-name" style={gray}>Jeff Seemann</h1>
        <h1 className={hideClass} style={green}>{page}</h1>
      </div>
    </div>
  }
}

export default Header
