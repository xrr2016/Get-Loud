import React, { Component } from 'react'
import Counter from '../components/Counter'
import store from '../redux/Store'

class ControlPanel extends Component {
  
  constructor () {
    super()
    this.state = this.getOwnState()
  }

  getOwnState () {
    let sum = 0
    const state = store.getState()
    for (let key in state) {
      if (state.hasOwnProperty(key)) {
        sum += state[key]
      }
    }
    return { sum: sum }
  }

  render() {
    return (
      <div>
        <Counter caption="First"  />
        <Counter caption="Second" />
        <Counter caption="Third"  /> 
        <hr/> 
        Total count: { this.state.sum }
      </div>
    )
  }
}

export default ControlPanel