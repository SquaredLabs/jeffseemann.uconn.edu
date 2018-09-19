import React from 'react'
import { colors } from '../../config'
import Header from '../../components/Header/index'
import Navigation from '../../components/Navigation/index'
const gray = { color: colors.siteGray}
const black = { color: colors.siteBlack }
const lightgray = { color: colors.profileWhite }

const ErrorHandler = (props) => {
  let display = props.children
  if (props.error) {
    display = (
      <div className="notfound-container">
        <div className="notfound-left">
          <div className="notfound-header">
            <Header page="Lab" hideAlways={true} />
          </div>
          <div className="notfound-404" style={gray}>Error</div>
          <div className="notfound-error">
            <div style={lightgray}>https://jeffseemann.uconn.edu/</div>
            <div style={black}>An expected error has occured. Please come back later.</div>
          </div>
          <div className="notfound-right-mobile">
            <Navigation />
          </div>
        </div>
        <div className="notfound-right">
          <Navigation />
        </div>
      </div>
    )
  }
  return <React.Fragment> {display} </React.Fragment>
}
export default ErrorHandler
