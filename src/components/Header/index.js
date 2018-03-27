import React, { Component } from 'react'
import { colors } from '../../config'

import './styles.css'

const gray = { color: colors.siteGray }

class Header extends Component {
    render = () =>
      <div className="header-container">
        <img className="uconn-logo" alt="uconn-logo" src="assets/img/uconn-wordmark-single-black.png"></img>
        <h1 className="header-name" style={gray}>Jeff Seemann</h1>
      </div>
}

export default Header
