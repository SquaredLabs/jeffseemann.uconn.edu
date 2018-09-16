import React, { Component } from 'react'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { colors } from '../../config'

import Navigation from './index'

import './styles.css'

const lightGray = { color: colors.profileWhite }
const black = { color: colors.siteBlack }

class Menu extends Component {



  state = { show: false }


  componentWillUnmount() {
    document.body.classList.remove('page-menu')
    clearAllBodyScrollLocks()
  }

  disableScroll = () => { disableBodyScroll(document.body) }
  enableScroll = () => { enableBodyScroll(document.body) }

  trigger() {
    this.setState({ show: !this.state.show })
    this.state.show ? this.enableScroll() : this.disableScroll()
    this.state.show
      ? document.body.classList.remove('page-menu')
      : document.body.classList.add('page-menu')
  }

  render() {
    const sign = this.state.show ? { __html: '&times;' } : { __html: '&plus;' }
    const menu = this.state.show ? 'menu-navigation-open' : 'menu-navigation-closed'

    return <div className="menu-container">
      <div className={menu}>
        <Navigation />
      </div>
      <div className="menu-button" onClick={() => this.trigger()}>
        <div className="menu-sign" style={black} dangerouslySetInnerHTML={sign}></div>
        <div className="menu-menu" style={lightGray}>Menu</div>
      </div>
    </div>
  }
}

export default Menu
