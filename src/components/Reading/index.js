import React, { Component } from 'react'

import Header from '../Header'
import NowReading from './NowReading'
import PastReading from './PastReading'
import Menu from '../Navigation/Menu'

import './styles.css'

class Reading extends Component {
    render = () =>
      <div className="reading-container">
        <Header page="Reading"/>
        <NowReading />
        <PastReading />
        <Menu />
      </div>
}

export default Reading
