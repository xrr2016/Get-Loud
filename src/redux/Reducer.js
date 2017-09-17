import { INCREMENT, DECREMENT } from './ActionTypes'

export default (state, action) => {
  const { caption } = action
  switch (action.type) {
    case INCREMENT: return {...state, caption: state[caption]++}  
    case DECREMENT: return {...state, caption: state[caption]--}  
    default: return state      
  }
}