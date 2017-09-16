import React, { Component } from 'react'
import Counter from '../components/Counter'

class ControlPanel extends Component {

  initValues = [0, 10, 20]
  initSum = this.initValues.reduce((a, b) => a + b, 0)
  state = { sum: this.initSum }
  
  onCounterUpdate = (newValue, prevValue) => {
    const valueChange = newValue - prevValue
    this.setState({ sum: this.state.sum + valueChange })
  }

  render() {
    return (
      <div>
        <Counter caption="First" onUpdate={this.onCounterUpdate}/>
        <Counter caption="Second" 
          initValue={this.initValues[1]} onUpdate={this.onCounterUpdate}/>
        <Counter caption="Third" 
          initValue={this.initValues[2]} onUpdate={this.onCounterUpdate}/>
        <hr/>  
        Total count: {this.state.sum}
      </div>
    )
  }
}

export default ControlPanel