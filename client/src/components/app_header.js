import React from 'react'

const AppHeader = () =>
  <header className="mdl-layout__header">
    <div className="mdl-layout__header-row">
      <h2 className="mdl-layout-title">Make Some Voices!</h2>
    </div>
    <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
      <a href="#scroll-tab-1" className="mdl-layout__tab is-active">All</a>
      <a href="#scroll-tab-2" className="mdl-layout__tab">Hot</a>
      <a href="#scroll-tab-3" className="mdl-layout__tab">New</a>
    </div>
  </header>

export default AppHeader