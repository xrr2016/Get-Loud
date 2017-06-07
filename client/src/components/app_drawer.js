import React from 'react'

const AppDrawer = () =>
  <div className="mdl-layout__drawer mdl-layout--small-screen-only" aria-hidden="true">
    <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
      <a className="mdl-navigation__link is-active" href="#">ALL</a>
      <a className="mdl-navigation__link" href="#">HOT</a>
      <a className="mdl-navigation__link" href="#">NEW</a>
    </nav>
  </div>

export default AppDrawer