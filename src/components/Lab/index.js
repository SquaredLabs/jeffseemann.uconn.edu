import React, { Component } from 'react'
import { labProfiles } from '../../config'

import ProfilePicture from '../ProfilePicture'

import './styles.css'

class Lab extends Component {
  render () {
    return <div className="lab-container">
      <div className="first-container">
        <div>
          Jeff Seemann has been an active and respected member of
          the nationwide research community for nearly four decades.
          While his research expertise lies in the field of
          <a className="text-keyword"> plant biology</a>,
          he is a respected member and seasoned administrator, having held
          positions at <a className="text-keyword">University of Nevado Reno</a>,
          <a className="text-keyword"> University of Rhode Island</a>,
          <a className="text-keyword"> Texas A&M</a>, and the
          <a className="text-keyword"> University of Connecticut</a>.
        </div>
        <br/>
        <div>
          Jeff is now running a lab at the University of Connecticut,
          conducting research and looking to <a className="text-keyword"> hire </a>
          and <a className="text-keyword"> collaborate</a>.
        </div>
      </div>
      <div className="second-container">
        <ProfilePicture profiles={labProfiles} />
      </div>
      <div className="third-container">
      </div>
      <div className="fourth-container">
      </div>
    </div>
  }
}

export default Lab
