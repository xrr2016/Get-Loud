import React from 'react'
import AppRight from '../components/app_right'
import VoiceList from '../containers/voice_list'

const style = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  minHeight: 524,
  padding: "12px 24px",
  margin: '24 auto',
  boxShadow: '0px 0px 4px rgba(0, 0, 0, .2)'
}

const AppContent = () => (
  <main style={style}>
    <VoiceList />
    <AppRight />
  </main>
)

export default AppContent