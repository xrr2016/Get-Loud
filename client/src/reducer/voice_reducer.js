import {
  FETCH_VOICES, LIKE_VOICE, DISLIKE_VOICE, ADD_COMMENT, SELECT_TAG
} from '../action/types'

const initialState = {
  voices: null,
  error: null,
  loading: false,
}

export default function voiceReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case FETCH_VOICES:
      return {...state, payload}
    case LIKE_VOICE:
    case DISLIKE_VOICE:
    case ADD_COMMENT:
    case SELECT_TAG:
    default:
      return state
  }
}