import React, { Component } from 'react'

import styles from './styles.scss'

class Footer extends Component {
    shouldComponentUpdate = () => false
    render = () =>
      <footer className={styles.footer}>
        <div>Test</div>
      </footer>
}

export default Footer
