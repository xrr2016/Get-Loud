import React from 'react'
import VoiceList from '../containers/voice_list'
import CreateVoiceForm from '../containers/create_voice_form'

const AppMain = () =>
  <main className="mdl-layout__content">
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
    <section className="mdl-layout__tab-panel" id="create">
      <div className="page-content">
        <CreateVoiceForm />
      </div>
    </section>
  </main>

export default AppMain