import { combineRedecers } from 'redux'
import voiceReducer from './voice_reducer'

export default function () {
  return combineRedecers({
    voices: voiceReducer
  })
}