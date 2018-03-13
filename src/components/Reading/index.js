import React, { Component } from 'react'
import { colors } from '../../config'

import NowReading from './NowReading'
import PastReading from './PastReading'

import './styles.css'

const styles = { color: colors.siteGray }

class Reading extends Component {
    render = () =>
      <div className="reading-container">
        <img className="uconn-logo" alt="uconn-logo" src="assets/img/uconn-wordmark-single-black.png"></img>
        <h1 className="name-header" style={styles}>Jeff Seemann</h1>
        <NowReading />
        <PastReading />
      </div>
}

export default Reading
