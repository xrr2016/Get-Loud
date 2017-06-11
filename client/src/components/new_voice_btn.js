import React from 'react'
import { NavLink } from 'react-router-dom'

const NewVoiceBtn = () =>
  <NavLink to='/create' className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-button--mini-fab app-new-voice-btn">
    <i className="material-icons">add</i>
  </NavLink>

export default NewVoiceBtn