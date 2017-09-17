import React from 'react'

const counterStyle = {
  margin: '16px'
}

const Counter = (props) =>  
  <div style={ counterStyle }>
    <button onClick={ props.onIncrement }>+</button>
    <button onClick={ props.onDecrement }>-</button>
    <span>{ props.caption } : {props.value }</span>
  </div>
export default Counter