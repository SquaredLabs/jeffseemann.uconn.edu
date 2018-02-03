import React, { Component } from 'react'

import './styles.css'

class Footer extends Component {
    shouldComponentUpdate = () => false

    // Replace with dynamic content from admin-on-rest
    render = () =>
      <footer className="footer">
        <div className="footer-item">jeff.seemann@uconn.edu</div>
        <div className="footer-item">+1 860 555 5555</div>
        <div className="footer-item">123 Drury Lane, Storrs, CT 06269</div>
      </footer>
}

export default Footer
