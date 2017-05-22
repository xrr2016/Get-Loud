import React from 'react'
import logo from '../assets/logo.png'

const style = {
  position: "fixed",
  top: 0,
  left: 0,
  height: 60,
  width: "100%",
  paddingLeft: 32,
  color: "#fff",
  backgroundColor: "#22C7A9",
  boxShadow: "0px 0px 4px rgba(0, 0, 0, .4)"
}

const AppHeader = () => (
  <header style={style}>
    <img src={logo} alt="make some voices" />
  </header>
)

export default AppHeader