export const randomColor = () => {
  const letters = 'abcdef1234567890'
  let color = '#'
  while (color.length <= 6) {
    color += letters[Math.floor(Math.random() * letters.length)]
  }
  return color
}