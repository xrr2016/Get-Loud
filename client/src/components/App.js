import React, { Component } from 'react';
import NewVoiceBtn from './new_voice_btn'
import TagSwitch from './tag_switch'
import VoiceList from '../containers/voice_list'

const style = {
  display: 'flex',
  justifyContent: 'flex-start',
  margin: '0px auto',
  alignItems: 'center',
  flexDirection: 'column',
  width: '80%',
  paddingTop: 20
}

const headerStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
}
const titleStyle = {
  width: '100%',
  textAlign: 'left',
  margin: '12px 0',
  color: '#bc3b28',
  fontSize: 28
}

class App extends Component {
  render() {
    return (
      <div style={style}>
        <h1 style={titleStyle}>Make some voices!</h1>
        <div style={headerStyle}>
          <TagSwitch />
          <NewVoiceBtn />
        </div>
        <VoiceList />
      </div>
    )
  }
}

export default App
