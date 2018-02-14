import React, { Component } from 'react'
import FooterItem from './FooterItem'

import { foot } from '../../config'
import './styles.css'

class Footer extends Component {
    shouldComponentUpdate = () => false

    // Replace with dynamic content from admin-on-rest
    render = () =>
      <footer className="footer">
        { foot.map((item, i) => <FooterItem index={i} key={item} item={item} />) }
      </footer>
}

export default Footer
