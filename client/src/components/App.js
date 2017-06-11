import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NewVoiceBtn from './new_voice_btn'
import CreateVoiceForm from '../containers/create_voice_form'
import VoiceDetail from '../containers/voice_detial'
import AppHeader from './app_header'
import AppMain from './app_main'
import '../styles/app.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' render={() => <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">
            <AppHeader />
            <AppMain />
          </div>} />
          <Route path='/create' component={CreateVoiceForm} />
          <Route path='/voice/:id' component={VoiceDetail} />
          <NewVoiceBtn />
        </div>
      </Router>
    )
  }
  // <Router>
  //   <div className="mdl-cell mdl-cell--12-col">
  //     <div className="app-header">
  //       <TagSwitch />
  //       <NewVoiceBtn />
  //     </div>
  //     <Route exact path="/" component={VoiceList} />
  //     <Route path="/create_voice" component={CreateVoiceForm} />
  //   </div>
  // </Router>
}

export default App
