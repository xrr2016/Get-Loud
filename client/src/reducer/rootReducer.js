import { combineReducers } from 'redux'
import voiceReducer from './voice_reducer'

const rootReducer = () => {
  return combineReducers({
    voices: voiceReducer
  })
}

export default rootReducer