import React, { Component } from 'react'
import '../styles/create_voice_modal.css'

class CreateVoiceModal extends Component {
  render() {
    return (
      <div className="modal-mask">
        <div className="modal-container">
          <div className="modal-header">header</div>
          <div className="modal-body">body</div>
          <div className="modal-footer">footer</div>
        </div>
      </div>
    )
  }
}

export default CreateVoiceModal