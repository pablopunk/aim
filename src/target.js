class Target {
  constructor (
    x,
    y,
    width,
    speedX = 0,
    speedY = 0
  ) {
    this.x = x
    this.y = y
    this.width = width
    this.speedX = speedX
    this.speedY = speedY
  }

  delta () {
    this.x += this.speedX
    this.y += this.speedY
  }

  move (x, y) {
    this.x = x
    this.y = y
  }

  touched (x, y) {
    const xFrom = this.x - this.width
    const xTo = this.x + this.width
    const yFrom = this.y - this.width
    const yTo = this.y + this.width

    return (
      x >= xFrom &&
      x <= xTo &&
      y >= yFrom &&
      y <= yTo
    )
  }
}

module.exports = {Target}
