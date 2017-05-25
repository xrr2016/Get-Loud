import React from 'react'
// import logo from '../assets/logo.png'

const style = {
  width: "100%",
  paddingLeft: 32,
  color: "#fff",
  backgroundColor: "#263646",
  boxShadow: "0px 0px 4px rgba(0, 0, 0, .4)"
}
const titleStyle = {
  display: 'flex',
  alignItems: 'center',
  margin: 0,
  height: 60,
  color: '#fff'
}

const AppHeader = () => (
  <header style={style}>
    <h1 style={titleStyle}>Make Some Voices!!!</h1>
  </header>
)
    // <img src={logo} alt="make some voices" />

export default AppHeader