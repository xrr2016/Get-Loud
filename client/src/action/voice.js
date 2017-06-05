import {
  FETCH_VOICES,
  LIKE_VOICE,
  DISLIKE_VOICE,
  ADD_COMMENT,
  SELECT_TAG,
  CREATE_NEW_VOICE
} from './types'
import { loadAllVoices } from './api'

export function fetchVoices() {
  return {
    type: FETCH_VOICES,
    payload: loadAllVoices()
  }
}

export function likeVoice(id) {
  return {
    type: LIKE_VOICE,
    id
  }
}

export function dislikeVoice(id) {
  return {
    type: DISLIKE_VOICE,
    id
  }
}

export function addComment(id, comment) {
  return {
    type: ADD_COMMENT,
    id,
    comment
  }
}

export function selectTag(tag) {
  return {
    type: SELECT_TAG,
    tag
  }
}

export function createNewVoice(voice) {
  return {
    type: CREATE_NEW_VOICE,
    voice,
    // payload: addNewVoice(voice)
  }
}














