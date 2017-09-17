import { INCREMENT, DECREMENT } from './ActionTypes'

export const increment = (caption) => {
  return {
    type: INCREMENT,
    caption
  }
}

export const decrement = (caption) => {
  return {
    type: DECREMENT,
    caption
  }
}