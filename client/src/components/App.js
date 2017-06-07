import React, { Component } from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import NewVoiceBtn from './new_voice_btn'
// import TagSwitch from './tag_switch'
// import VoiceList from '../containers/voice_list'
// import CreateVoiceForm from '../containers/create_voice_form'
import AppHeader from './app_header'
import AppDrawer from './app_drawer'
import AppMain from './app_main'

class App extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header has-drawer is-upgraded">
        <AppHeader />
        <AppDrawer />
        <AppMain />
      </div>
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
