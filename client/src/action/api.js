export const loadAllVoices = () => {
  return fetch('/api/voices').then(res => res.json())
}

export const addNewVoice = (voice) => {
  return fetch('/api/voices', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: voice
  }).then(res => res.json())
}