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
    this.hits = 0
  }

  delta () {
    this.x += this.speedX
    this.y += this.speedY
  }

  move (x, y) {
    this.x = x
    this.y = y
  }

  shrink () {
    this.width -= 2
  }

  touched (x, y) {
    const xFrom = this.x - this.width
    const xTo = this.x + this.width
    const yFrom = this.y - this.width
    const yTo = this.y + this.width

    const wasTouched = (
      x >= xFrom &&
      x <= xTo &&
      y >= yFrom &&
      y <= yTo
    )

    if (wasTouched) {
      this.hits++
    }

    return wasTouched
  }

  dead () {
    return this.hits > 4
  }
}

module.exports = {Target}
