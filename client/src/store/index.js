import thunk from 'redux-thunk'
// import createLogger from 'redux-logger'
import {middleware as pack } from 'redux-pack'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducer/rootReducer'

// const logger = createLogger()
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, pack)
  )
)

export default store
