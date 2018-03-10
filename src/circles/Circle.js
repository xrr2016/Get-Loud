class Circle {
  constructor (opts = {
    x: Math.random() * (window.innerWidth - 100) + 50,
    y: Math.random() * (window.innerHeight - 100) + 50,
    dx: ((Math.random() - 0.5) * 2),
    dy: ((Math.random() - 0.5) * 2),
    r: Math.random() * 8 + 10,
    c: Circle.colors[Math.floor(Math.random() * Circle.colors.length)]
  }) {
    this.opts = opts
    this.minR = this.opts.r
  }

  draw (ctx) {
    ctx.beginPath()
    ctx.fillStyle = this.opts.c
    ctx.arc(this.opts.x, this.opts.y, this.opts.r, 0, Math.PI * 2)
    ctx.fill()
    this.update()
  }

  update () {
    if (this.opts.x + this.opts.r > window.innerWidth || this.opts.x - this.opts.r < 0) {
      this.opts.dx = -this.opts.dx
    }

    if (this.opts.y + this.opts.r > window.innerHeight || this.opts.y - this.opts.r < 0) {
      this.opts.dy = -this.opts.dy
    }

    this.opts.x += this.opts.dx
    this.opts.y += this.opts.dy
  }

  detect (x, y) {
    if (
      (x - this.opts.x < this.opts.r) &&
      (x - this.opts.x > -this.opts.r) &&
      (y - this.opts.y < this.opts.r) &&
      (y - this.opts.y > -this.opts.r)
    ) {
      if (this.opts.r < Circle.maxRadius) this.opts.r += 4
    } else if (this.opts.r > this.minR) {
      this.opts.r -= 4
    }
  }
}

Circle.maxRadius = 100
Circle.colors = [ '#00204A', '#00BBF0', '#D9FAFF', '#FDB44B', '#FF6464', '#04DEAD', '#FFB6B9', '#FFDD00', '#248888' ]
