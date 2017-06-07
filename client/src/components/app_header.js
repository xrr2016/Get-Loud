import React from 'react'

const AppHeader = () =>
  <header className="mdl-layout__header">
    <div className="mdl-layout__header-row app-header"
      style={{ justifyContent: 'center', padding: 0 }}>
      <span className="mdl-layout-title">Make Some Voices!</span>
    </div>
    <div className="mdl-layout__tab-bar mdl-js-ripple-effect app-nav">
      <a href="#all" className="mdl-layout__tab is-active">All</a>
      <a href="#hot" className="mdl-layout__tab">Hot</a>
      <a href="#new" className="mdl-layout__tab">New</a>
    </div>
  </header>

export default AppHeader