import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NewVoiceBtn from './new_voice_btn'
import TagSwitch from './tag_switch'
import VoiceList from '../containers/voice_list'



class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="app-title">Make some voices!</h1>
        <div className="app-header">
            <NewVoiceBtn />
            <TagSwitch />
          <Router>
            <Route path="/" component={VoiceList} />
            <Route path="/hot" component={VoiceList} />
            <Route path="/new" component={VoiceList} />
          </Router>
        </div>
      </div>
    )
  }
}

export default App
