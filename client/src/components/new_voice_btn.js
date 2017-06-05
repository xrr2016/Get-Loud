import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/new_voice_btn.css'

const NewVoiceBtn = () =>
  <NavLink to="/create_voice" className="app-new-voice-btn" >New Voice</NavLink>

export default NewVoiceBtn