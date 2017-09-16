import React, { Component } from 'react'
import Counter from '../components/Counter'

class ControlPanel extends Component {
  render() {
    console.log('enter ControlPanel render')
    return (
      <div>
        {/* <Counter caption="First" /> */}
        {/* <Counter caption="Second" /> */}
        <Counter caption="Third" />
        <button onClick={() => this.forceUpdate()}>Click to repaint!</button>
      </div>
    )
  }
}

export default ControlPanel