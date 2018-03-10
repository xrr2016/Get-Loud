const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  init()
})

let circles = []

function animate () {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  for (let index = 0; index < circles.length; index++) {
    circles[index].draw(ctx)
  }
  window.requestAnimationFrame(animate)
}

function init() {
  circles.length = 0
  for (let index = 0; index < 500; index++) {
    circles.push(new Circle())
  }
}

init()
animate()

const handleMouseMoveOnCanvas = event => {
  const {x, y} = event
  for (let index = 0; index < circles.length; index++) {
    circles[index].detect(x, y)
  }
}

canvas.addEventListener('mousemove', handleMouseMoveOnCanvas)
