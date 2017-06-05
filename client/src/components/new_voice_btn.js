import React, { Component } from 'react'

class NewVoiceBtn extends Component {

  state = {
    showModal: false
  }

  handleClick = () => {
    this.setState({
      showModal: true
    })
  }

  render() {
    return (
      <button className="app-new-voice-btn" 
        onClick={this.handleClick}>New Voice</button>
    )
  }
}


export default NewVoiceBtn