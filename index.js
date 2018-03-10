const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})

let circles = []
for (let index = 0; index < 100; index++) {
  circles.push(new Circle())
}

function animate () {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  window.requestAnimationFrame(animate)
}

animate()
