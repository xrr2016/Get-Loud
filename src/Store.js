import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as todoReducer } from './todos'
import { reducer as filterReducer } from './filter'

const rootReducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
})

export default createStore(rootReducer, composeWithDevTools())
