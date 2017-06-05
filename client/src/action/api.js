export const loadAllVoices = () => {
  return fetch('/api/voices').then(res => res.json())
}

export const createNewVoice = (voice) => {
  return fetch('/api/voices', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.parse(voice)
  }).then(res => res.json())
}