// import thunk from 'redux-thunk'
import logger from 'redux-logger'
// import {middleware as pack } from 'redux-pack'
import promise from 'redux-promise-middleware'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducer/rootReducer'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(promise(), logger)
  )
)

export default store
