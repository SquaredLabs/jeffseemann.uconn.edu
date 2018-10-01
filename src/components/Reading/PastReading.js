import React, { Component } from 'react'
import { apiFetch, apiImageUrl } from '../../utils'
import { colors, apiUri } from '../../config'

import './styles.css'

const blackStyle = { color: colors.siteBlack }

class PastReading extends Component {
    state = {
      books: []
    }

    componentDidMount () {
      this.pastReading()
    }

    async pastReading () {
      const response = await apiFetch(apiUri.pastReading.pathname, apiUri.pastReading.query)
      this.setState({ books: response.data })
    }

    render () {
      const books = this.state.books.map((book) => {
        const uri = apiImageUrl(book.image.data.url)
        return <img className="past-reading-img" key={book.id}
          alt={book.title} src={uri}></img>
      })

      return <div className="past-reading-container">
        <div className="header" style={blackStyle}>Past Reading</div>
        <div>{books}</div>
      </div>
    }
}

export default PastReading
