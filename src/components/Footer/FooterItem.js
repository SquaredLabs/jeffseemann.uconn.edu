import React, { Component } from 'react'
import { colors } from '../../config'

import './styles.css'

const styles = {
  color: colors.siteWhite
}

class FooterItem extends Component {
  render () {
    const { item } = this.props

    return <div style={styles}>{item}</div>
  }
}

export default FooterItem
