import React from 'react'
import AppRight from '../components/app_right'
import VoiceList from '../containers/voice_list'

const style = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  minHeight: 524,
  padding: "12px 32px",
  margin: '24 auto',
}

const AppContent = () => (
  <main style={style}>
    <VoiceList />
    <AppRight />
  </main>
)

export default AppContent