import React from 'react'
import { Provider } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import store from './configureStore'
import history from './history'
import Home from './components/Home'
import Footer from './components/Footer'

import './App.css'

// Component that will hold body of landing page
const Layout = ({ children }) =>
  <div>
    <main className="main-container">
      { children }
    </main>
    <Footer />
  </div>

const App = () =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        <Route exact path='/' render={() => <Redirect to='/home' />} />
        <Route path='/home' component={Home} />
      </Layout>
    </ConnectedRouter>
  </Provider>

export default App
