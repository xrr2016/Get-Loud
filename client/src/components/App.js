import React, { Component } from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import NewVoiceBtn from './new_voice_btn'
// import TagSwitch from './tag_switch'
// import VoiceList from '../containers/voice_list'
// import CreateVoiceForm from '../containers/create_voice_form'

class App extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <h2 className="mdl-layout-title">Make some voices!</h2>
          </div>
          <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
            <a href="#scroll-tab-1" className="mdl-layout__tab is-active">All</a>
            <a href="#scroll-tab-2" className="mdl-layout__tab">Hot</a>
            <a href="#scroll-tab-3" className="mdl-layout__tab">New</a>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">More info</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="">Github</a>
          </nav>
        </div>
        <main className="mdl-layout__content">
          <section className="mdl-layout__tab-panel is-active" id="scroll-tab-1">
            <div className="page-content">Your content goes here --></div>
          </section>
          <section className="mdl-layout__tab-panel" id="scroll-tab-2">
            <div className="page-content">Your content goes here --></div>
          </section>
          <section className="mdl-layout__tab-panel" id="scroll-tab-3">
            <div className="page-content">Your content goes here --></div>
          </section>
        </main>
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
