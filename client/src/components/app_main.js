import React from 'react'
import VoiceList from '../containers/voice_list'

const AppMain = () =>
  <main className="mdl-layout__content" 
    style={{padding: 40}}>
    <section className="mdl-layout__tab-panel is-active" id="all">
      <div className="page-content">
        <VoiceList />
      </div>
    </section>
    <section className="mdl-layout__tab-panel" id="hot">
      <div className="page-content">
        <VoiceList />
      </div>
    </section>
    <section className="mdl-layout__tab-panel" id="new">
      <div className="page-content">
        <VoiceList />
      </div>
    </section>
  </main>

export default AppMain