module.exports = class {
  constructor ({ width, height }) {
    this.width = width
    this.height = height
  }

  check (target) {
    if (target.x - target.width <= 0 || target.x + target.width >= this.width) {
      target.speedX *= -1
    }
    if (target.y - target.width <= 0 || target.y + target.width >= this.height) {
      target.speedY *= -1
    }

    return target
  }
}
