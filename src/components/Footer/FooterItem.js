import React, { Component } from 'react'
import { colors } from '../../config'

import './styles.css'

const styles = {
  color: colors.siteWhite
}

class FooterItem extends Component {
  render () {
    const { item } = this.props

    return item.substr(0, 6) === 'assets'
      ? <img className="DnDBy" alt={item} src={item}></img>
      : <div className="item" style={styles}>{item}</div>
  }
}

export default FooterItem
