export const loadAllVoices = () => {
  return fetch('/api/voices').then(res => {
    res.json()
  })
}