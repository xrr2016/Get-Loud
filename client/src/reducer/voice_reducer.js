import { handle } from 'redux-pack'
import {
  FETCH_VOICES, LIKE_VOICE, DISLIKE_VOICE, ADD_COMMENT, SELECT_TAG
} from '../action/types'

export default function voiceReducer(state = [], action) {
  switch (action.type) {
    case FETCH_VOICES:
      return handle(state, action, {
        start: prevState => ({ ...prevState, isLoading: true, error: false }),
        finish: prevState => ({ ...prevState, isLoading: false }),
        failure: prevState => ({ ...prevState, error: action.payload }),
        success: prevState => ({ ...prevState, voices: action.payload })
      })
    case LIKE_VOICE:
    case DISLIKE_VOICE:
    case ADD_COMMENT:
    case SELECT_TAG:
    default:
      return state
  }
}