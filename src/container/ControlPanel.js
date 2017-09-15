import React, { Component } from 'react'
import Counter from '../components/Counter'

class ControlPanel extends Component {
  render() {
    return (
      <div>
        <Counter caption="first" ininValue={0} />
        <Counter caption="second" ininValue={10} />
        <Counter caption="third" ininValue={20} />
      </div>
    )
  }
}

export default ControlPanel