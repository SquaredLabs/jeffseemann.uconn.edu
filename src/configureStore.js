import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import history from './history'
import * as reducers from './reducers'

export default createStore(
  combineReducers({ ...reducers, routing: routerReducer }),
  composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
)
