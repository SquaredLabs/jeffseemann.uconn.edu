import React, { Component } from 'react'
import { colors } from '../../config'

import './styles.css'

const gray = { color: colors.siteGray }
const black = { color: colors.siteBlack }

class Course extends Component {
  constructor (props) {
    super(props)

    this.state = { show: false }

    this.toggleShow = this.toggleShow.bind(this)
  }

  toggleShow () { this.setState({ show: !this.state.show }) }

  render () {
    const { course: { name, number, credits, professor, description } } = this.props

    const showDescription = this.state.show
      ? <div className="course-description-text" style={gray}>{description}</div>
      : <div></div>

    return <div className="course-container">
      <img className="course-img-expand" alt="icon" onClick={this.toggleShow}
        src={this.state.show ? 'assets/img/Collapse_Text.png' : 'assets/img/Expand_Text.png'}></img>
      <div className="course-info-container">
        <div className="course-name" style={black}>{name}</div>
        <div className="course-signature" style={gray}>
          {number} &middot; {credits}
        </div>
        <div className="course-professor" style={black}>{professor}</div>
        <div className="course-description" style={black} onClick={this.toggleShow}>Course Description</div>
        {showDescription}
      </div>
    </div>
  }
}

export default Course
