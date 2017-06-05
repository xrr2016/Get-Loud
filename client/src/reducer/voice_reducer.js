import {
  FETCH_VOICES_PENDING,
  FETCH_VOICES_REJECTED,
  FETCH_VOICES_FULFILLED,
  // CREATE_NEW_VOICE_PENDING,
  // CREATE_NEW_VOICE_REJECTED,
  // CREATE_NEW_VOICE_FULFILLED
  CREATE_NEW_VOICE
} from '../action/types'

const initialState = {
  voices: [],
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
    case CREATE_NEW_VOICE:
      const voices = state.voices.concat(action.voice)
      return Object.assign(state, voices)
    default:
      return state
  }
}