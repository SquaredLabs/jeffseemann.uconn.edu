import React, { Component } from 'react'

import './styles.css'

class FooterItem extends Component {
  render () {
    const { item } = this.props

    return <div className="footer-item">{item}</div>
  }
}

export default FooterItem
