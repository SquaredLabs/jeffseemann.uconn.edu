import React, { Component } from 'react'
import { colors } from '../../config'

import Header from '../Header'
import Collaborators from './Collaborators'

import './styles.css'

const gray = { color: colors.siteGray }
const black = { color: colors.siteBlack }
const green = { color: colors.siteGreen }

class Collaborate extends Component {
    render = () =>
      <div className="collab-container">
        <Header />
        <div className="collab-welcome-banner">
          <div>
            <div className="collab-name" style={black}>Seemann</div>
            <div className="collab-name" style={black}>Lab</div>
          </div>
          <div className="collab-plus" style={gray}>+</div>
          <div className="Rectangle"></div>
        </div>
        <div className="collab-slogan-container">
          <div className="collab-slogan" style={gray}>Knowledge is infinite.</div>
          <div className="collab-slogan" style={green}>Let's share.</div>
        </div>
        <div className="collab-collab" style={gray}>Past + Present Collaborators</div>
        <Collaborators />
        <div className="collab-slogan-container">
          <div className="collab-slogan" style={gray}>Interested? Contact <span style={black}><u>Jeff</u></span>.</div>
        </div>
      </div>
}

export default Collaborate
