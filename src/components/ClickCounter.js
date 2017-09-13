import React, { Component } from 'react'

class ClickCounter extends Component {
  
  state = {
    count: 0
  }

  handleClickBtn = () => {
    this.setState({
      count: this.state.count += 1
    })
  }

  render() {
    const counterStyle = {
      margin: '16px'
    }
    return (
      <div style={counterStyle}>
        <button onClick={this.handleClickBtn}>Click Me</button>
        <br/>
        Click Count: {this.state.count}
      </div>
    )
  }
}

export default ClickCounter