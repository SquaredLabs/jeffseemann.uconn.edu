  import React, { Component } from 'react'
import sw from 'stopword'
import { colors } from '../../config'
import _ from 'lodash'

import './styles.css'

const green = { color: colors.siteGreen }
const black = { color: colors.siteBlack }
const greenFill = { background: colors.siteGreen }

class WordWheel extends Component {
  getHighestFrequencyWord (words) {
    var dict = {}
    words.forEach(word => { (word in dict) ? dict[word] += 1 : dict[word] = 1 })
    // find the key with the higest value
    return _.maxBy(_.keys(dict), o => dict[o])
  }

  getFrequencyDict (data, years) {
    var dict = {}
    years.forEach(year => {
      var words = []
      data.forEach(e => {
        if (e.year === year) {
          // remove any character that is not a digit, letter, -, or /
          const noPunctuation = e.abstract.replace(/[^\w\s\-/]/g, '')
          const wordList = noPunctuation.split(' ')
          words = words.concat(wordList)
        }
      })
      const lessWordyList = sw.removeStopwords(words)
      dict[year] = this.getHighestFrequencyWord(lessWordyList)
    })
    return dict
  }

  render () {
    const { data, years, currentYearIndex } = this.props

    const freq = this.getFrequencyDict(data, years)

    var keys = []
    var values = []
    let sz = 2.938
    let index = 0
    _.forEach(freq, (value, key) => {
      // if (index === 1) { sz = 2.313 }
      // if (index === years.length - 2) { sz = 2.938 }
      // if (index === years.length - 1) { sz = 3.668 }
      const valueStyle = _.assign({}, index === years.length - 1 ? green : black, { 'fontSize': `${sz}em` })
      const keyStyle = index === years.length - 1 ? green : black
      index += 1
      keys.push(<div className="WordWheel-key" style={keyStyle} key={key}>{key}</div>)
      values.push(<div className="WordWheel-value" style={valueStyle} key={key}>{value}</div>)
    })

    return <div className="WordWheel-container">
      <div className="WordWheel-key-container">
        {keys.reverse()}
      </div>
      <div className="WordWheel-bar-container">
        <div className="WordWheel-bar" style={greenFill}></div>
      </div>
      <div className="WordWheel-value-container">
        {values.reverse()}
      </div>
    </div>
  }
}

export default WordWheel
