import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NewVoiceBtn from './new_voice_btn'
import TagSwitch from './tag_switch'
import VoiceList from '../containers/voice_list'
import CreateVoiceForm from '../containers/create_voice_form'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <h1 className="app-title">Make some voices!</h1>
            <div className="app-header">
              <TagSwitch />
              <NewVoiceBtn />
            </div>
            <Route exact path="/" component={VoiceList} />
            <Route path="/create_voice" component={CreateVoiceForm}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
