export const loadAllVoices = () => {
  fetch('/api/voices')
    .then(res => res.json())
}