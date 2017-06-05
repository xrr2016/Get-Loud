import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createNewVoice } from '../action/voice'
import '../styles/create_voice_form.css'

class CreateVoiceForm extends Component {

  state = {
    content: '',
    author: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.content.length > 0 && this.state.author.length > 0) {
      this.props.createNewVoice(this.state)
    }
  }

  render() {
    const { content, author } = this.state
    return (
      <form className="app-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input type="text"
            className="form-input"
            value={content}
            id="content"
            name="content"
            onChange={this.handleChange}
            placeholder="说点什么" />

          <input type="text"
            className="form-input"
            value={author}
            id="author"
            name="author"
            onChange={this.handleChange}
            placeholder="您的昵称" />

        </div>
        <div className="form-actions">
          <button className="form-action" type="submit">确定</button>
          <button className="form-action" >取消</button>
        </div>
      </form>
    )
  }
}


export default connect(null, { createNewVoice })(CreateVoiceForm)