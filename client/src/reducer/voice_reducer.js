import {
  FETCH_VOICES,
  FETCH_VOICES_FAILURE,
  FETCH_VOICES_SUCCESS,
  LIKE_VOICE,
  DISLIKE_VOICE,
  ADD_COMMENT,
  SELECT_TAG
} from '../action/types'

export default function voiceReducer(state = [], action) {
  switch (action.type) {
    case FETCH_VOICES:
    case FETCH_VOICES_FAILURE:
    case FETCH_VOICES_SUCCESS:
    case LIKE_VOICE:
    case DISLIKE_VOICE:
    case ADD_COMMENT:
    case SELECT_TAG:
    default:
      return state
  }
}