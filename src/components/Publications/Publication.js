import React, { Component } from 'react'
import { colors } from '../../config'

import './styles.css'

const gray = { color: colors.siteGray }
const black = { color: colors.siteBlack }
const green = { background: colors.siteGreen }

class Publication extends Component {
    state = {
      show: false,
      collapseImg: 'assets/img/Expand_Text.png'
    }

    toggleShow () { this.setState({ show: !this.state.show }) }

    changeImgOnHover (url) { this.setState({ collapseImg: url }) }

    render () {
      const { publication: { title, discipline, info, authors, abstract, url } } = this.props

      const showAbstract = this.state.show
        ? <div className="publication-abstract-text" style={black}>
          {abstract}
          {url ? <div className="publication-abstract-readmore">
            <a className="publication-abstract-readmore-link" rel="noopener noreferrer" href={url} target="_blank">Read more!</a>
          </div> : 'N/A'}
        </div>
        : <div></div>

      return <div className="publication-container">
        <div className="publication-info-wrapper">
          <div className="publication-title" style={black}>{title}</div>
          <div className="publication-discipline" style={black}>{discipline}</div>
          <div className="publication-info" style={gray}>{info}</div>
          <div className="publication-authors" style={gray}>{authors}</div>
        </div>
        <div className="publication-abstract-wrapper" style={this.state.show ? green : {}}
          onMouseOver={() => { this.changeImgOnHover('assets/img/Expand_Text_Hover.png') }}
          onMouseOut={() => { this.changeImgOnHover('assets/img/Expand_Text.png') }}>
          <div className="publication-abstract-header" onClick={() => this.toggleShow()}>
            <img className="publication-img-expand" alt="icon"
              src={this.state.show ? 'assets/img/Collapse_Text.png' : this.state.collapseImg}/>
            <div className="publication-abstract" style={this.state.show ? black : {}}>Abstract</div>
          </div>
          {showAbstract}
        </div>
      </div>
    }
}

export default Publication
