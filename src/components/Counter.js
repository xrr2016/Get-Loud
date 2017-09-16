import React, { Component } from 'react'

class Counter extends Component {
   
  constructor () {
    super()
    console.log('enter constructor')
    
    this.state = {
      count: 0  
    }
  }

  
  componentWillMount () {
    console.log('enter componentWillMount' + this.props.caption)
  }
  componentDidMount () {
    console.log('enter componentDidMount' + this.props.caption)
  }
  componentWillReciveProps (nextProps) {
    console.log('enter componentWillReciveProps', this.props.caption)
  }
  handleClickIncrementBtn = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleClickDecrementBtn = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClickIncrementBtn}>+</button>
        <button onClick={this.handleClickDecrementBtn}>-</button>
        {this.props.caption}: {this.state.count}
      </div>
    )
  }
}

Counter.defaultProps = {
  initValue: 0
}

export default Counter