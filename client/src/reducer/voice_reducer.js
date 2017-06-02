import {
  FETCH_VOICES_PENDING,
  FETCH_VOICES_REJECTED,
  FETCH_VOICES_FULFILLED,
  LIKE_VOICE,
  DISLIKE_VOICE,
  ADD_COMMENT,
  SELECT_TAG
} from '../action/types'

const initialState = {
  voices: null,
  error: null,
  loading: false,
}

export default function voiceReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case FETCH_VOICES_PENDING:
      return { ...state, loading: true }
    case FETCH_VOICES_REJECTED:
      return { ...state, loading: false, error: payload }
    case FETCH_VOICES_FULFILLED:
      return { ...state, loading: false, voices: payload }
    case LIKE_VOICE:
    case DISLIKE_VOICE:
    case ADD_COMMENT:
    case SELECT_TAG:
    default:
      return state
  }
}