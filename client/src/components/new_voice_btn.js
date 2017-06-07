import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/new_voice_btn.css'

const NewVoiceBtn = () =>
  <NavLink to="/create_voice"
    className="mdl-button mdl-js-button mdl-button--raised mdl-button--primary"
  >New Voice</NavLink>
  
export default NewVoiceBtn