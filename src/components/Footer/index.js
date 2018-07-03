import React, { Component } from 'react'
import FooterItem from './FooterItem'
import { apiUri } from '../../config'
import { apiFetch } from '../../utils'
import './styles.css'

class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      address: 'Loading',
      email: 'Loading',
      phone: 'Loading',
    }
  }
  componentDidMount () {
    this.getContact()
  }
  async getContact () {
    const address = await apiFetch(apiUri.contact_address.pathname)
    const email = await apiFetch(apiUri.contact_email.pathname)
    const phone = await apiFetch(apiUri.contact_phone.pathname)
    this.setState({
      address: address.data[0].address,
      email: email.data[0].email,
      phone: phone.data[0].phone
    })
  }

    // Replace with dynamic content from admin-on-rest
    render = () =>
      <footer className="footer">
        <FooterItem item={this.state.email} />
        <FooterItem item={this.state.phone} />
        <FooterItem item={this.state.address} />
      </footer>
}

export default Footer
