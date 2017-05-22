import React from 'react'

const style = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: 60,
  backgroundColor: "#fff",
  boxShadow: "0px 0px 4px rgba(0, 0, 0, .4)"
}

const AppHeader = () => (
  <header style={style}>
    Make Some Voices!
  </header>
)

export default AppHeader