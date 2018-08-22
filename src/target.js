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
    return (
      x >= this.x &&
      x <= this.x + this.width &&
      y >= this.y &&
      y <= this.y + this.width
    )
  }
}

module.exports = {Target}
