class Circle {

  constructor(opts = {
    x: Math.floor(Math.random() * window.innerWidth),
    y: Math.floor(Math.random() * window.innerHeight),
    dx: Math.round((Math.random() - 0.5) * 20),
    dy: Math.round((Math.random() - 0.5) * 20),
    r: Math.round(Math.random() * 100),
    c: this.getRandomColor()
  }) {
    this.opts = opts
  }

  draw (ctx) {
    ctx.beginPath()
    ctx.strokeStyle = this.opts.c
    ctx.arc(this.opts.x, this.opts.y, this.opts.r, 0, Math.PI * 2)
    ctx.stroke()
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

  getRandomColor () {
    let c = '#'
    const letters = '1234567890abcef'
    while (c.length < 7) {
      c += letters[Math.floor(Math.random() * letters.length)]
    }
    return c
  }
}