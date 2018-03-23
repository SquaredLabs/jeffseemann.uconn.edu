import React, { Component } from 'react'

import Header from '../Header'
import NowReading from './NowReading'
import PastReading from './PastReading'

import './styles.css'

class Reading extends Component {
    render = () =>
      <div className="reading-container">
        <Header />
        <NowReading />
        <PastReading />
      </div>
}

export default Reading
