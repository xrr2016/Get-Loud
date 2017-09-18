import { SET_FILTER } from './actionType'
import { FilterTypes } from './constants'

export default (state = FilterTypes.all, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter
    default:
      return state
  }
}